const fs=require("fs");
const path=require("path");
const html=fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");
const css=fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");

jest.dontMock("fs");

describe("All the styles should be applied", function () {
  beforeEach(() => {
    //here I import the HTML into the document
    document.documentElement.innerHTML=html.toString();

    //apply the styles from the stylesheet if needed

  });
  afterEach(() => {
    jest.resetModules();
  });

  it("The H2 Tag should have a font-size: 0.8em", function () {
    // get computed styles of any element you like
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;
    const h2Tag=document.querySelector("h2");
    var styles=window.getComputedStyle(h2Tag);
    expect(styles["font-size"]).toBe("0.8em");
  });
  it("The H3 Tag should haave a font-size: 0.8rem", function () {
    // get computed styles of any element you like
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;
    const h3Tag=document.querySelector("h3");
    var styles=window.getComputedStyle(h3Tag);
    expect(styles["font-size"]).toBe("0.8rem");
  });
  it("You should add your rules below the existing code", function () {
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;
    let cssArray=document.styleSheets[0].cssRules[0].selectorText;

    expect(cssArray).toBe("#my-first-div");
  }
  )
  it("You should add your rules below the existing code", function () {
    document.querySelector(
      "head"
    ).innerHTML=`<style>${css.toString()}</style>`;
    let cssArray=document.styleSheets[0].cssRules[1].selectorText;
    expect(cssArray).toBe("#the-second-one");
  }
  )
  it("You should not change the existing head tag elements", function () {
    let head = document.querySelector('head');
    let meta = head.querySelector("meta")
    let link = head.querySelector('link').href
    let title = head.querySelector('title')
    
    expect(meta).not.toBe(null)
    expect(link).toBe('http://localhost/styles.css')
    expect(title).not.toBe(null)
  })

});
