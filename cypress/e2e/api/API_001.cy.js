describe("API Testing - GDesk", () => {
  let token;
  let job_id;

  // #region --------------------- Login---------------------------------
  before(() => {
    cy.request("POST", "https://apiv2.gdesk.io/api/auth/login", {
      username: "acc435@yopmail.com",
      password: "Aa12345",
    }).then((response) => {
      expect(response.status).to.eq(200);
      token = response.body.token; // save login token
    });
  });
  // #endregion ----------------------------------------------------------

  // #region --------------------- Add new job---------------------------------
  it("Create a new job", () => {
    cy.request({
      method: "POST",
      url: "https://apiv2.gdesk.io/api/jobs",
      headers: {
        "Accept": "*/*",
        "Accept-Language": "vi,en-US;q=0.9,en;q=0.8",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "Origin": "https://r2.gdesk.io",
        "Pragma": "no-cache",
        "Referer": "https://r2.gdesk.io/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36",
        "gd-branch-id": "GDOIPJETOWXR",
        "platform": "web",
        "sec-ch-ua": '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "token": token, // token from api login
      },
      body: {
        "customer_id": "119",
        "location_id": "123",
        "service_id": "8",
        "primary_schedule_id": "9",
        "schedule_ids": [],
        "crew_ids": [],
        "note": "",
        "date": "2025-02-19T08:00:00.000Z",
        "hours": 0,
        "minutes": 30,
        "recurrence": {
          "frequency": "OFF",
          "interval": "1",
          "bymonthday": "dayofweek",
          "byyearday": "dayofyear",
          "SU": "0",
          "MO": "1",
          "TU": "0",
          "WE": "0",
          "TH": "0",
          "FR": "0",
          "SA": "0",
          "countChecked": "2",
          "ends": "never",
          "occurances": 1,
          "endDate": ""
        },
        "exception": {
          "options": {
            "first": null,
            "second": null,
            "third": null,
            "fourth": null,
            "fifth": null,
            "sixth": null,
            "seventh": null,
            "eighth": null,
            "ninth": null,
            "tenth": null,
            "eleventh": null
          },
          "summary": ""
        },
        "invoice": null,
        "estimate": null,
        "documents": [],
        "materials": [],
        "buildings": [],
        "units": [],
        "status": 0,
        "always_confirmed": 0,
        "locked": 0,
        "estimate_id": "",
        "time_window": {
          "id": "",
          "start": 480,
          "end": 510
        },
        "sold_by_ids": [],
        "commission_selected": [],
        "schedule": [],
        "repeat": 0,
        "socket_id": "1739956501715_main_calendar",
        "job_cycle": 1,
        "notify_tech": 0,
        "notify_customer": {
          "isNotifyCustomer": false,
          "template": {}
        }
      }
    }).then((response) => {
      expect(response.status).to.eq(200); //check api response status
      cy.log("", JSON.stringify(response.body, null, 2));// display response body in log
      job_id = response.body.data.id;
    });
  });
  // #endregion ----------------------------------------------------------


  // #region --------------------- Update status job---------------------------------
  it("Wait 5 seconds then update job status", () => {
    cy.wait(5000); // wait 5 seconds

    cy.request({
      method: "PUT",
      url: `https://apiv2.gdesk.io/api/jobs/${job_id}/status`, // use job_id when create job
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "token": token,
      },
      body: {
        "status": "2",
        "note": "",
        "color_id": 1
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("success", true); // Kiểm tra API response
      cy.log("Updated Job Status:", JSON.stringify(response.body, null, 2));
    });
  });
  // #endregion ----------------------------------------------------------


});
