// Weber County Hive — Education docket
// One record per Utah school district with documented findings.
// Leave a field null/"" if unconfirmed — the table renders "—" rather than guessing.
// caseFile: relative path to a built case-file page, or null if none built yet.

const EDUCATION_DISTRICTS = [
  {
    district: "Tooele County SD",
    county: "Tooele",
    geminiStatus: "DPA signed",
    dpaDate: "2026-06-11",
    appCount: 77,
    appCountYear: 2023,
    devicePolicy: "Policy 5031 (AI glasses/device rules)",
    caseFile: "tooele-county-sd.html",
    tags: ["gemini", "dpa-signed", "device-policy", "hb55-study"]
  },
  {
    district: "Washington County SD",
    county: "Washington",
    geminiStatus: "No classroom access (staff-only, Policy 3750)",
    dpaDate: null,
    appCount: null,
    appCountYear: null,
    devicePolicy: null,
    caseFile: null,
    tags: ["gemini", "no-classroom-access"]
  },
  {
    district: "Weber SD",
    county: "Weber",
    geminiStatus: null,
    dpaDate: null,
    appCount: 580,
    appCountYear: 2023,
    devicePolicy: null,
    caseFile: "weber-hive-hb55-edtech-privacy.html",
    tags: ["app-count-only", "hb55-study"]
  },
  {
    district: "Jordan SD",
    county: "Salt Lake",
    geminiStatus: null,
    dpaDate: null,
    appCount: 954,
    appCountYear: 2023,
    devicePolicy: null,
    caseFile: "weber-hive-hb55-edtech-privacy.html",
    tags: ["app-count-only", "hb55-study"]
  },
  {
    district: "Granite SD",
    county: "Salt Lake",
    geminiStatus: null,
    dpaDate: null,
    appCount: 694,
    appCountYear: 2023,
    devicePolicy: null,
    caseFile: "weber-hive-hb55-edtech-privacy.html",
    tags: ["app-count-only", "hb55-study"]
  },
  {
    district: "Provo City SD",
    county: "Utah",
    geminiStatus: null,
    dpaDate: null,
    appCount: 2386,
    appCountYear: 2023,
    devicePolicy: null,
    caseFile: "weber-hive-hb55-edtech-privacy.html",
    tags: ["app-count-only", "hb55-study"]
  }
];
