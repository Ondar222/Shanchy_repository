import { makeAutoObservable } from "mobx";

class SearchDocs {
  doc_title
  result = []
  types = []

  constructor() {
    makeAutoObservable(this)
  }

  search(string) {
    this.query = string
  }

  setType(string) {
    this.type = string
  }

  fetchDocsByTypes(doc_type) {
    fetch(`${import.meta.env.PUBLIC_URL}/api/documents?populate=%2A&filters[document_types][title][$eq]=${doc_type}`)
      .then(res => res.json())
      .then(json => {
        this.result = JSON.parse(JSON.stringify(json.data))
      })
  }

  filterDocsByTitle(doc_title) {
    fetch(`${import.meta.env.PUBLIC_URL}/api/documents?populate[0]=file&filters[title][$containsi]=${doc_title}&populate=*`)
      .then(res => res.json())
      .then(json => {
        this.result = JSON.parse(JSON.stringify(json.data))
      })
  }

  fetchDocsAll() {
    fetch(`${import.meta.env.PUBLIC_URL}/api/documents?populate=*`)
      .then(res => res.json())
      .then(json => {
        this.result = JSON.parse(JSON.stringify(json.data))
      })
  }
}

export default new SearchDocs