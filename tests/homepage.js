/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */
// - - Chimp-specific globals:
/* globals browser assert server */

// a regex pattern for semantic version validation
/* to check, visit regex101.com
\bv?(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?\
*/
import semverRegex from 'semver-regex'
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

function getFooter () {
    const selectorClass = '.savi-copyright-footer'
    const cfSelector = browser.elements(selectorClass)

    // this is the synchronous method, we probably
    // really want to return a promise..
    browser.waitForVisible(selectorClass, 1000)
    // NOTE: can we use Chai-as-Promised yet?
    // ( Mocha uses C-a-P now, as ().should.eventually.have.assertMethod(value) )

    return cfSelector
}

describe('copyright-footer', function() {
    let copyrightText =
        `© SAVI Controls, LLC |
        ##version##`

    beforeEach(() => {

        // Point chimp at the local SAVI instance
        browser.url('http://savi/')

        // just testing a WebDriver.io function
        // browser.timeoutsImplicitWait(2000);

        // server.call(/*pre-populate method*/)
    })

    it('should exist', function () {
        console.log(getFooter().selector)
        assert.ok(getFooter())

    })

    xit('should show a version which is a valid semantic version', function() {

        assert.ok(semverRegex.test(getFooter()))
    })
})
