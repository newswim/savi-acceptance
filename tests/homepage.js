/* eslint valid-jsdoc: "error" */
/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */
// - - Chimp-specific globals:
/* globals browser assert */

// a regex pattern for semantic version validation
/* to check, visit regex101.com
\bv?(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?\
*/
// import semverRegex from 'semver-regex'
/*              TEST SWEET

|  Acceptance tests for normal UI interactions

Done
- footer area should be accessible

To-do
- footer copyright text should display current year
- footer area should show valid semver of software version
- change of scenes should successfully change routes
- change of scenes should implement a different view layout (if a room scene)
- change of scenes should render the same devices
- clicking a device should activate its 'selected' state
- clicking a source should change the source on selected device
- clicking remote icon should activate control modal
- clicking exit icon should close control modal
- selecting the 'all' filter should make all devices in the group 'active'
- selecting the 'none' filter should deselect all devices, or remove 'active' class

*/
/*
 * on the in-office demo server displays the following in the
 * footer area of the DOM:
 *
 *              © SAVI Controls, LLC |
 *              develop
 *              |
 *              Licensed To:
 *              DDI Office (.23)
 *
 */

/*
 *  @global {object} browser
 *  @description A chimp.js-specific alias for WebDriver's {client} object
 */

function getFooterText() {
    const selectorClass = '.savi-copyright-footer'
    const cfSelector = browser
                          .elements(selectorClass)
                          .getText()

    // this is the synchronous method, we probably
    // really want to return a promise..
    // browser.waitForVisible(selectorClass, 1000)
    // NOTE: can we use Chai-as-Promised yet?
    // ( Mocha uses C-a-P now, as ().should.eventually.have.assertMethod(value) )

    return cfSelector
}

describe('copyright-footer', function () {
    // let copyrightText =
    //     `© SAVI Controls, LLC |
    //     ##version##`

    beforeEach(() => {

        // Point chimp at the local SAVI instance
        browser.url('http://savi/')

        // just testing a WebDriver.io function
        // browser.timeoutsImplicitWait(2000);

        // server.call(/*pre-populate method*/)
    })

    it('should exist', function () {
        console.log(getFooterText())
        // assert.ok(getFooterText())

        const selectorClass = '.savi-copyright-footer'
        const cfSelector = browser
            .element(selectorClass)
            .getText()

        try {
            console.log(cfSelector)
        } catch (e) {
            throw e
        }
        assert.ok(cfSelector)

    })

    // xit('should show a version which is a valid semantic version', function() {
    //
    //     assert.ok(semverRegex.test(getFooterText()))
    // })
})

describe('facility view', function () {
  // hit the landing page
  // beforeEach(() => browser.url('http://savi/'))
    it('should let users select all devices in a group', function () {

        // 1. get # of devices
        const numberBeforeClick = browser.elements('tv-item', function (e, response) {
            console.log('e: ' + e)
            console.log('response: ' + response)
            console.log('response.value: ' + response.value)
        })
        // const numberAfterClick = browser.elements('tv-item selected')
        // 2. click the 'all' filter
        // if multiple nodes exist, 'click' will target only the first one
        browser.timeouts('implicit', 10000)
        // browser.elementIdClick('preset')
        console.log(numberBeforeClick)
        browser.timeoutsImplicitWait(2000)
        // 3. check that class + selected class match former number

        // assert.equal(numberBeforeClick, numberAfterClick)

    })

})
