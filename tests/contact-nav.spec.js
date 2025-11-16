import { test, expect } from '@playwright/test'
import NavPage from './models/NavPage'

test.describe('contact', () => {
  let navPage

  test.beforeEach(async ({ page }) => {
    navPage = new NavPage(page)
    await navPage.gotoContact()
  })

  test('open page', async () => {
    await expect(navPage.getH1()).toHaveCount(1)
    await expect(navPage.getH1()).toHaveText('Contact')
    await expect(await navPage.getTitle()).toBe('Contact')
  })

  test('click home link', async () => {
    await navPage.showHome()

    await expect(navPage.getH1()).toHaveCount(1)
    await expect(navPage.getH1()).toHaveText('Home')
    await expect(navPage.getURL()).toMatch(/\/index\.html$/)
    await expect(await navPage.getTitle()).toBe('Home')
  })

  test('click about link', async () => {
    await navPage.showAbout()

    await expect(navPage.getH1()).toHaveCount(1)
    await expect(navPage.getH1()).toHaveText('About')
    await expect(navPage.getURL()).toMatch(/\/about\.html$/)
    await expect(await navPage.getTitle()).toBe('About')
  })
})
