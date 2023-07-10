describe("Dashboard Page Test Cases", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/dashboard");
    })
    it("Do Login with Correct Values", () => {
        cy.visit("http://localhost:3000");
        const email = cy.get("input[name='email']")
        email.type("user@react.test")
        
        const password = cy.get("input[name='password']")
        password.type("password")

        const button = cy.get("button")
        button.click();
        
        cy.on('window.alert', (text) => {
            expect(text).to.contains("welcome");
        });
        cy.url().should("equal", "http://localhost:3000/dashboard")
    });
    it("Found No Post for the First Time", () => {
        cy.contains("Found 0 photos");
    });
    it("Contains Image url and description input, and Publish button", () => {
        const images = cy.get("input[name='image']");
        images.should("be.visible");
        images.should("have.attr","type", "url");
        images.should("have.attr","required", "required");
        images.should("have.attr", "placeholder", "Image URL");

        const desc = cy.get("input[name='desc']")
        desc.should("be.visible");
        desc.should("have.attr", "type", "text");
        desc.should("have.attr", "required" , "required");
        desc.should("have.attr", "placeholder", "What's on your mind?");

        const button = cy.get("button");
        button.should("be.visible");
        button.contains("Publish!");
        button.should("have.css", "background-color", "rgb(79, 70, 229)");
        button.should("have.css", "color", "rgb(255, 255, 255)");
    })
    it("Logout",() => {
        const logout = cy.get('a.text-sm.ml-2.cursor-pointer.hover\\:-translate-y-1.duration-500.transition-all.ml-auto[href="/"]');
        logout.click();
        // cy.url().should("eq", "http://localhost:3000");
        cy.visit("http://localhost:3000");
    });
})