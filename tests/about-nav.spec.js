import { test, expect } from '@playwright/test'
import NavPage from './models/NavPage'

test.describe('about', () => {
  let navPage

  test.beforeEach(async ({ page }) => {
    navPage = new NavPage(page)
    await navPage.gotoAbout()
  })

  test('open page', async () => {
    await expect(navPage.getH1()).toHaveCount(1)
    await expect(navPage.getH1()).toHaveText('About')
    await expect(await navPage.getTitle()).toBe('About')
  })

  test('click home link', async () => {
    await navPage.showHome()

    await expect(navPage.getH1()).toHaveCount(1)
    await expect(navPage.getH1()).toHaveText('Home')
    await expect(navPage.getURL()).toMatch(/\/index\.html$/)
    await expect(await navPage.getTitle()).toBe('Home')
  })

  test('click contact link', async () => {
    await navPage.showContact()

    await expect(navPage.getH1()).toHaveCount(1)
    await expect(navPage.getH1()).toHaveText('Contact')
    await expect(navPage.getURL()).toMatch(/\/contact\.html$/)
    await expect(await navPage.getTitle()).toBe('Contact')
  })
})
