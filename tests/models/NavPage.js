export default class NavPage {
  constructor(page) {
    this.page = page
  }

  async goto() {
    await this.page.goto('')
  }

  async gotoAbout() {
    await this.page.goto('/about.html')
  }

  async gotoContact() {
    await this.page.goto('/contact.html')
  }

  async showHome() {
    await this.page.getByRole('link', { name: 'Home' }).click()
  }

  async showAbout() {
    await this.page.getByRole('link', { name: 'About' }).click()
  }

  async showContact() {
    await this.page.getByRole('link', { name: 'Contact' }).click()
  }

  getH1() {
    return this.page.getByRole('heading', { level: 1 })
  }

  getURL() {
    return this.page.url()
  }

  async getTitle() {
    return await this.page.title()
  }
}
