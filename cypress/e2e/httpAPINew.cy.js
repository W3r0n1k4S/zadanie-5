describe("httpbin tests", () => {
  const request = {
    method: "GET",
    url: "https://httpbin.org/headers",
    headers: {
      Cookie: "cookieName=cookieValue",
    },
    failOnStatusCode: false,
  };

  it("Test cookies", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
      assert.equal("cookieName=cookieValue", response.requestHeaders["Cookie"]);
    });
  });

  it("response code should be 200", () => {
    cy.request("https://httpbin.org").then((response) => {
      const status = response.status;
      assert.equal(200, status);
    });
  });

  it("Kod odpowiedzi powinien być 404 dla nieistniejącego URL", () => {
    const request404 = {
      url: "https://httpbin.org/non-existing-url",
      failOnStatusCode: false,
    };

    cy.request(request404).then((response) => {
      const status = response.status;
      assert.equal(404, status);
    });
  });

  const requestPOST = {
    method: "POST",
    url: "https://httpbin.org/post",
    qs: {
      username: "weronikas",
    },
    failOnStatusCode: false,
  };

  it("Przekazanie parametrow zapytania", () => {
    cy.request(requestPOST).then((response) => {
      const status = response.status;
      assert.equal(200, status);
      assert.equal("weronikas", response.body.args.username);
    });
  });

  const requestGET = {
    method: "GET",
    url: "https://httpbin.org/headers",
    headers: {
      customHeader: "customValue",
    },
    failOnStatusCode: false,
  };

  it("Test nagłówków", () => {
    cy.request({
      method: "GET",
      url: "https://httpbin.org/headers",
      headers: {
        "User-Agent": "Cypress",
        "X-My-Header": "MyValue",
      },
    }).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("headers");
    });
  });

  it("Test czasu trwania wniosku z opóźnieniem", () => {
    const startTime = Date.now();
    cy.request("GET", "https://httpbin.org/delay/3").should((response) => {
      const duration = Date.now() - startTime;
      expect(response.status).to.eq(200);
      expect(duration).to.be.closeTo(3000, 500);
    });
  });

  it("Test przekierowań", () => {
    cy.request("GET", "https://httpbin.org/redirect/1").should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.url).to.eq("https://httpbin.org/get");
    });
  });

  it("Test obrazków w formacie PNG", () => {
    cy.request("GET", "https://httpbin.org/image/png").should((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers["content-type"]).to.include("image/png");
    });
  });

  it("test that header set correctly", () => {
    cy.request(requestGET).then((response) => {
      assert.equal(200, response.status);
      assert.equal("customValue", response.requestHeaders.customHeader);
    });
  });

  it("test duration", () => {
    const requestDuration = {
      method: "GET",
      url: "https://httpbin.org/headers",
      failOnStatusCode: false,
    };

    cy.request(requestDuration).then((response) => {
      assert.isTrue(response.duration <= 700);
    });
  });

  

  it("test random ids", () => {
    for (let i = 0; i < 10; i++) {
      const randomId = getRandomInt(10000000);

      const request = {
        url: "https://httpbin.org/headers",
        id: randomId,
      };

      cy.request(request).then((response) => {
        assert.isTrue(response.status == 200);
      });
    }
  });
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
