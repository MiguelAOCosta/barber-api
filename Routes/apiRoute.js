require("dotenv").config();
const router = require("express").Router();
const { google } = require("googleapis");
// Provide the required configuration
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
const calendarId = process.env.CALENDAR_ID;
// Google calendar API settings
const SCOPES = "https://www.googleapis.com/auth/calendar";
const calendar = google.calendar({ version: "v3" });

const auth = new google.auth.JWT(
  CREDENTIALS.client_email,
  null,
  CREDENTIALS.private_key,
  SCOPES
);

router.get("/", (req, res) => {
  res.send({ message: "Api is ok!" });
});

router.post("/create-event", async (req, res) => {
  try {
    const { name, phone, startDate, endDate } = req.body;

    const response = await calendar.events.insert({
      auth: auth,
      calendarId: calendarId,
      requestBody: {
        summary: name,
        description: phone,
        location: `Vila Nova de Gaia`,
        colorId: `6`,
        start: {
          dateTime: new Date(startDate),
        },
        end: {
          dateTime: new Date(endDate),
        },
      },
    });

    res.send(response);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
