

describe("Webhook", () => {

it("new", () => {
    // cy.visit("https://github.com/");
    cy.request({
        method: "GET",
        url: "https://echo-webhook.herokuapp.com/foobar",
        headers: {
            "Content-Type": "application/json"
        },
        
    }).then(resp => {
        expect(resp.status).to.be.eq(200)
        console.log(resp.body);
    })
})
  
})



