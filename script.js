/*
=========================================================
SAHIL ELEVATE CLASS LIBRARY
FOLDER → SUBJECT → CLASS → VIDEO
=========================================================

IMAGE SYSTEM:
Put your folder images inside:
assets/

Example:
assets/web-development.svg
assets/cpp.svg
assets/python.svg
assets/computer.svg

Then set:
image: "assets/web-development.svg"

YOUTUBE:
For:
https://www.youtube.com/watch?v=DR36G7kdZno
use:
video: "DR36G7kdZno"

=========================================================
*/



// ========== 1st Batch Folder ==========



const library = [
  {
    id: "Champion 23.0",
    name: "Champion 23.0",
    icon: "</>",
    image: "champio-23.0.png",
    description: "Basic To Advance",
    subjects: [
      {
        id: "Height & Distance",
        name: "Height & Distance",
        icon: "Height & Distance",
        image: "champio-23.0.png",
        description: "Basic To Advanced",
        classes: [
          { id: "Height & Distance-01", name: "Class 01 — Height & Distance", duration: "48 min. 6 sec.", video: "Fl8TZ8UaAzE" },
          { id: "Height & Distance-02", name: "Class 02 — Height & Distance", duration: "54 min. 35 sec.", video: "v8nF-KIrNTU" },
          { id: "Height & Distance-03", name: "Class 03 — Height & Distance", duration: "49 min. 12 sec.", video: "b1axKloXsuU" },
          { id: "Height & Distance-04", name: "Class 04 — Height & Distance", duration: "47 min. 32 sec.", video: "TCLbbybbGxo" },
          { id: "Height & Distance-05", name: "Class 05 — Height & Distance", duration: "49 min. 41 sec.", video: "0Hrv5WLvFLw" }
        ]
      },


      {
        id: "Quadratic Equations",
        name: "Quadratic Equations",
        icon: "Quadratic Equations",
        image: "champio-23.0.png",
        description: "Basic To Advance",
        classes: [
          { id: "Quadratic Equations-01", name: "Class 01 — Quadratic Equations", duration: "1 hour 3 mint 23 second", video: "N2ccuqn9FPM" },
          { id: "Quadratic Equations-02", name: "Class 02 — Quadratic Equations", duration: "1 hour 3 mint 37 second", video: "2u7MNvLlHpM" }
        ]
      },


      {
        id: "Algebra",
        name: "Algebra",
        icon: "Algebra",
        image: "champio-23.0.png",
        description: "Basic To Advance",
        classes: [
          { id: "Algebra-01", name: "Class 01 — Algebra", duration: "1 Hour 26 min 40 Second", video: "d1YZXLomlKQ" },
          { id: "Algebra-02", name: "Class 02 — Algebra", duration: "1 Hour 04 min 23 Second", video: "1ZUuWjrnLlw" },
          { id: "Algebra-03", name: "Class 03 — Algebra", duration: "0 Hour 58 min 00 Second", video: "8h8B92S5f44" },
          { id: "Algebra-04", name: "Class 04 — Algebra", duration: "1 Hour 00 min 45 Second", video: "k2XAJisbvTE" },
          { id: "Algebra-05", name: "Class 05 — Algebra", duration: "1 Hour 11 min 11 Second", video: "3Qv_yMs8rAU" }
        ]
      },


      {
        id: "Divisibility",
        name: "Divisibility",
        icon: "Divisibility",
        image: "champio-23.0.png",
        description: "Basic To Advance",
        classes: [
          { id: "Divisibility-01", name: "Class 01 — Divisibility", duration: "video timing", video: "" },
          { id: "Divisibility-02", name: "Class 02 — Divisibility", duration: "video timing", video: "" },
          { id: "Divisibility-03", name: "Class 03 — Divisibility", duration: "video timing", video: "" },
          { id: "Divisibility-04", name: "Class 04 — Divisibility", duration: "video timing", video: "" },
          { id: "Divisibility-05", name: "Class 05 — Divisibility", duration: "video timing", video: "" }
        ]
      },

      {
        id: "Partnership",
        name: "Partnership",
        icon: "Partnership",
        image: "champio-23.0.png",
        description: "Basic To Advance",
        classes: [
          { id: "Partnership-01", name: "Class 01 — Partnership", duration: "video timing", video: "" },
          { id: "Partnership-02", name: "Class 02 — Partnership", duration: "video timing", video: "" },
          { id: "Partnership-03", name: "Class 03 — Partnership", duration: "video timing", video: "" },
          { id: "Partnership-04", name: "Class 04 — Partnership", duration: "video timing", video: "" },
          { id: "Partnership-05", name: "Class 05 — Partnership", duration: "video timing", video: "" },
          { id: "Partnership-06", name: "Class 06 — Partnership", duration: "video timing", video: "" },
          { id: "Partnership-07", name: "Class 07 — Partnership", duration: "video timing", video: "" }
        ]
      },

      {
        id: "AGE",
        name: "AGE",
        icon: "AGE",
        image: "champio-23.0.png",
        description: "Basic To Advance",
        classes: [
          { id: "AGE-01", name: "Class 01 — AGE", duration: "video timing", video: "" },
          { id: "AGE-02", name: "Class 02 — AGE", duration: "video timing", video: "" },
          { id: "AGE-03", name: "Class 03 — AGE", duration: "video timing", video: "" }
        ]
      },

      {
        id: "Proporations",
        name: "Proporations",
        icon: "Proporations",
        image: "champio-23.0.png",
        description: "Basic To Advance",
        classes: [
          { id: "Ratio-01", name: "Class 01 — Ratio", duration: "video timing", video: "" },
          { id: "Ratio-02", name: "Class 02 — Ratio", duration: "video timing", video: "" },
          { id: "Ratio-03", name: "Class 03 — Ratio", duration: "video timing", video: "" }
        ]
      },

      {
        id: "Ratio",
        name: "Ratio",
        icon: "Ratio",
        image: "champio-23.0.png",
        description: "Basic To Advance",
        classes: [
          { id: "Ratio-01", name: "Class 01 — Ratio", duration: "video timing", video: "" },
          { id: "Ratio-02", name: "Class 02 — Ratio", duration: "video timing", video: "" },
          { id: "Ratio-03", name: "Class 03 — Ratio", duration: "video timing", video: "" },
          { id: "Proporations-04", name: "Class 04 — Proporations", duration: "video timing", video: "" },
          { id: "Proporations-05", name: "Class 05 — Proporations", duration: "video timing", video: "" },
          { id: "Proporations-06", name: "Class 06 — Proporations", duration: "video timing", video: "" },
          { id: "Proporations-07", name: "Class 07 — Proporations", duration: "video timing", video: "" },
          { id: "Proporations-08", name: "Class 08 — Proporations", duration: "video timing", video: "" },
          { id: "Proporations-09", name: "Class 09 — Proporations", duration: "video timing", video: "" },
          { id: "Proporations-10", name: "Class 10 — Proporations", duration: "video timing", video: "" },
          { id: "Proporations-11", name: "Class 11 — Proporations", duration: "video timing", video: "" },
          { id: "Proporations-12", name: "Class 12 — Proporations", duration: "video timing", video: "" }
        ]
      },

      {
        id: "Piper and Cistern",
        name: "Piper and Cistern",
        icon: "Piper and Cistern",
        image: "champio-23.0.png",
        description: "Basic To Advance",
        classes: [
          { id: "Piper and Cistern-01", name: "Class 01 — Piper and Cistern", duration: "video timing", video: "" },
          { id: "Piper and Cistern-02", name: "Class 02 — Piper and Cistern", duration: "video timing", video: "" },
          { id: "Piper and Cistern-03", name: "Class 03 — Piper and Cistern", duration: "video timing", video: "" },
          { id: "Piper and Cistern-04", name: "Class 04 — Piper and Cistern", duration: "video timing", video: "" },
          { id: "Piper and Cistern-05", name: "Class 05 — Piper and Cistern", duration: "video timing", video: "" }
        ]
      },

      {
        id: "Work & Wages",
        name: "Work & Wages",
        icon: "Work & Wages",
        image: "champio-23.0.png",
        description: "Basic To Advance",
        classes: [
          { id: "Work & Wages-01", name: "Class 01 — Work & Wages", duration: "video timing", video: "" },
          { id: "Work & Wages-02", name: "Class 02 — Work & Wages", duration: "video timing", video: "" }
        ]
      },

      {
        id: "Times & Work",
        name: "Times & Work",
        icon: "Times & Work",
        image: "champio-23.0.png",
        description: "Basic To Advance",
        classes: [
          { id: "Times & Work-01", name: "Class 01 — Times & Work", duration: "video timing", video: "" },
          { id: "Times & Work-02", name: "Class 02 — Times & Work", duration: "video timing", video: "" },
          { id: "Times & Work-03", name: "Class 03 — Times & Work", duration: "video timing", video: "" },
          { id: "Times & Work-04", name: "Class 04 — Times & Work", duration: "video timing", video: "" },
          { id: "Times & Work-05", name: "Class 05 — Times & Work", duration: "video timing", video: "" },
          { id: "Times & Work-06", name: "Class 06 — Times & Work", duration: "video timing", video: "" },
          { id: "Times & Work-07", name: "Class 07 — Times & Work", duration: "video timing", video: "" },
          { id: "Times & Work-08", name: "Class 08 — Times & Work", duration: "video timing", video: "" },
          { id: "Times & Work-09", name: "Class 09 — Times & Work", duration: "video timing", video: "" },
          { id: "Times & Work-10", name: "Class 10 — Times & Work", duration: "video timing", video: "" },
          { id: "Times & Work-11", name: "Class 11 — Times & Work", duration: "video timing", video: "" },
          { id: "Times & Work-12", name: "Class 12 — Times & Work", duration: "video timing", video: "" },
          { id: "Times & Work-13", name: "Class 13 — Times & Work", duration: "video timing", video: "" },
          { id: "Times & Work-14", name: "Class 14 — Times & Work", duration: "video timing", video: "" }
        ]
      },

      {
        id: "SI {Installment}",
        name: "SI {Installment}",
        icon: "SI {Installment}",
        image: "champio-23.0.png",
        description: "Basic To Advance",
        classes: [
          { id: "SI {Installment}-01", name: "Class 01 — SI {Installment}", duration: "video timing", video: "" },
          { id: "SI {Installment}-02", name: "Class 02 — SI {Installment}", duration: "video timing", video: "" },
          { id: "SI {Installment}-03", name: "Class 03 — SI {Installment}", duration: "video timing", video: "" },
          { id: "SI {Installment}-04", name: "Class 04 — SI {Installment}", duration: "video timing", video: "" }
        ]
      },

      {
        id: "Trigonometry",
        name: "Trigonometry",
        icon: "Trigonometry",
        image: "champio-23.0.png",
        description: "Basic To Advance",
        classes: [
          { id: "Trigonometry-01", name: "Class 01 — Trigonometry", duration: "video timing", video: "" },
          { id: "Trigonometry-02", name: "Class 02 — Trigonometry", duration: "video timing", video: "" },
          { id: "Trigonometry-03", name: "Class 03 — Trigonometry", duration: "video timing", video: "" },
          { id: "Trigonometry-04", name: "Class 04 — Trigonometry", duration: "video timing", video: "" },
          { id: "Trigonometry-05", name: "Class 05 — Trigonometry", duration: "video timing", video: "" },
          { id: "Trigonometry-06", name: "Class 06 — Trigonometry", duration: "video timing", video: "" },
          { id: "Trigonometry-07", name: "Class 07 — Trigonometry", duration: "video timing", video: "" },
          { id: "Trigonometry-08", name: "Class 08 — Trigonometry", duration: "video timing", video: "" },
          { id: "Trigonometry-09", name: "Class 09 — Trigonometry", duration: "video timing", video: "" },
          { id: "Trigonometry-10", name: "Class 10 — Trigonometry", duration: "video timing", video: "" },
          { id: "Trigonometry-11", name: "Class 11 — Trigonometry", duration: "video timing", video: "" },
          { id: "Trigonometry-12", name: "Class 12 — Trigonometry", duration: "video timing", video: "" },
          { id: "Trigonometry-13", name: "Class 13 — Trigonometry", duration: "video timing", video: "" },
          { id: "Trigonometry-14", name: "Class 14 — Trigonometry", duration: "video timing", video: "" },
          { id: "Trigonometry-15", name: "Class 15 — Trigonometry", duration: "video timing", video: "" },
          { id: "Trigonometry-16", name: "Class 16 — Trigonometry", duration: "video timing", video: "" },
          { id: "Trigonometry-17", name: "Class 17 — Trigonometry", duration: "video timing", video: "" },
          { id: "Trigonometry-18", name: "Class 18 — Trigonometry", duration: "video timing", video: "" },
          { id: "Trigonometry-19", name: "Class 19 — Trigonometry", duration: "video timing", video: "" },
          { id: "Trigonometry-20", name: "Class 20 — Trigonometry", duration: "video timing", video: "" },
          { id: "Trigonometry-21", name: "Class 21 — Trigonometry", duration: "video timing", video: "" },
          { id: "Trigonometry-22", name: "Class 22 — Trigonometry", duration: "video timing", video: "" },
          { id: "Trigonometry-23", name: "Class 23 — Trigonometry", duration: "video timing", video: "" }
        ]
      },

      {
        id: "Maxima Minima Trigonometry",
        name: "Maxima Minima Trigonometry",
        icon: "Maxima Minima Trigonometry",
        image: "champio-23.0.png",
        description: "Basic To Advance",
        classes: [
          { id: "Maxima Minima Trigonometry-01", name: "Class 01 — Maxima Minima Trigonometry", duration: "video timing", video: "" },
          { id: "Maxima Minima Trigonometry-02", name: "Class 02 — Maxima Minima Trigonometry", duration: "video timing", video: "" }
        ]
      },

      {
        id: "Airthmetic Progress / Geometry Progress",
        name: "Airthmetic Progress / Geometry Progress",
        icon: "Airthmetic Progress / Geometry Progress",
        image: "champio-23.0.png",
        description: "Basic To Advance",
        classes: [
          { id: "Airthmetic Progress-01", name: "Class 01 — Airthmetic Progress", duration: "video timing", video: "" },
          { id: "Airthmetic Progress-02", name: "Class 02 — Airthmetic Progress", duration: "video timing", video: "" },
          { id: "Geometry Progress-01", name: "Class 01 — Geometry Progress", duration: "video timing", video: "" },
          { id: "Geometry Progress-02", name: "Class 02 — Geometry Progress", duration: "video timing", video: "" }
        ]
      },

      {
        id: "Number System",
        name: "Number System",
        icon: "Number System",
        image: "champio-23.0.png",
        description: "Basic To Advance",
        classes: [
          { id: "Number System-01", name: "Class 01 — Number System", duration: "video timing", video: "" },
          { id: "Number System-02", name: "Class 02 — Number System", duration: "video timing", video: "" },
          { id: "Number System-03", name: "Class 03 — Number System", duration: "video timing", video: "" },
          { id: "Number System-04", name: "Class 04 — Number System", duration: "video timing", video: "" }
        ]
      },

      {
        id: "Avarage",
        name: "Avarage",
        icon: "Avarage",
        image: "champio-23.0.png",
        description: "Basic To Advance",
        classes: [
          { id: "Avarage-01", name: "Class 01 — Avarage", duration: "video timing", video: "" },
          { id: "Avarage-02", name: "Class 02 — Avarage", duration: "video timing", video: "" },
          { id: "Avarage-03", name: "Class 03 — Avarage", duration: "video timing", video: "" },
          { id: "Avarage-04", name: "Class 04 — Avarage", duration: "video timing", video: "" }
        ]
      },

      {
        id: "Alligations",
        name: "Alligations",
        icon: "Alligations",
        image: "champio-23.0.png",
        description: "Basic To Advance",
        classes: [
          { id: "Alligations-01", name: "Class 01 — Alligations", duration: "video timing", video: "" },
          { id: "Alligations-02", name: "Class 02 — Alligations", duration: "video timing", video: "" },
          { id: "Alligations-03", name: "Class 03 — Alligations", duration: "video timing", video: "" },
          { id: "Alligations-04", name: "Class 04 — Alligations", duration: "video timing", video: "" }
        ]
      },

      {
        id: "Mixture",
        name: "Mixture",
        icon: "Mixture",
        image: "champio-23.0.png",
        description: "Basic To Advance",
        classes: [
          { id: "Mixture-01", name: "Class 01 — Mixture", duration: "video timing", video: "" },
          { id: "Mixture-02", name: "Class 02 — Mixture", duration: "video timing", video: "" },
          { id: "Mixture-03", name: "Class 03 — Mixture", duration: "video timing", video: "" },
          { id: "Mixture-04", name: "Class 04 — Mixture", duration: "video timing", video: "" }
        ]
      },

      {
        id: "Compound Interest",
        name: "Compound Interest",
        icon: "Compound Interest",
        image: "champio-23.0.png",
        description: "Basic To Advance",
        classes: [
          { id: "Compound Interest-01", name: "Class 01 — Compound Interest", duration: "video timing", video: "" },
          { id: "Compound Interest-02", name: "Class 02 — Compound Interest", duration: "video timing", video: "" },
          { id: "Compound Interest-03", name: "Class 03 — Compound Interest", duration: "video timing", video: "" },
          { id: "Compound Interest-04", name: "Class 04 — Compound Interest", duration: "video timing", video: "" }
        ]
      },

      {
        id: "Simple Interest",
        name: "Simple Interest",
        icon: "Simple Interest",
        image: "champio-23.0.png",
        description: "Basic To Advance",
        classes: [
          { id: "Simple Interest-01", name: "Class 01 — Simple Interest", duration: "video timing", video: "" },
          { id: "Simple Interest-02", name: "Class 02 — Simple Interest", duration: "video timing", video: "" },
          { id: "Simple Interest-03", name: "Class 03 — Simple Interest", duration: "video timing", video: "" },
          { id: "Simple Interest-04", name: "Class 04 — Simple Interest", duration: "video timing", video: "" }
        ]
      },

      {
        id: "Calculations",
        name: "Calculations",
        icon: "Calculations",
        image: "champio-23.0.png",
        description: "Basic To Advance",
        classes: [
          { id: "Calculations-01", name: "Class 01 — Calculations", duration: "video timing", video: "" },
          { id: "Calculations-02", name: "Class 02 — Calculations", duration: "video timing", video: "" },
          { id: "Calculations-03", name: "Class 03 — Calculations", duration: "video timing", video: "" },
          { id: "Calculations-04", name: "Class 04 — Calculations", duration: "video timing", video: "" }
        ]
      },

      {
        id: "Digital Sum",
        name: "Digital Sum",
        icon: "Digital Sum",
        image: "champio-23.0.png",
        description: "Basic To Advance",
        classes: [
          { id: "Digital Sum-01", name: "Class 01 — Digital Sum", duration: "video timing", video: "" },
          { id: "Digital Sum-02", name: "Class 02 — Digital Sum", duration: "video timing", video: "" },
          { id: "Digital Sum-03", name: "Class 03 — Digital Sum", duration: "video timing", video: "" },
          { id: "Digital Sum-04", name: "Class 04 — Digital Sum", duration: "video timing", video: "" }
        ]
      },

      {
        id: "Strategy & Guidance",
        name: "Strategy & Guidance",
        icon: "Strategy & Guidance",
        image: "champio-23.0.png",
        description: "Basic To Advance",
        classes: [
          { id: "Strategy & Guidance-01", name: "Class 01 — Strategy & Guidance", duration: "video timing", video: "" },
          { id: "Strategy & Guidance-02", name: "Class 02 — Strategy & Guidance", duration: "video timing", video: "" },
          { id: "Strategy & Guidance-03", name: "Class 03 — Strategy & Guidance", duration: "video timing", video: "" },
          { id: "Strategy & Guidance-04", name: "Class 04 — Strategy & Guidance", duration: "video timing", video: "" }
        ]
      },

    ]
  },



  // ========== 2nd Batch Folder ==========



  {
    id: "Be a Banking Master",
    name: "Be a Banking Master",
    icon: "Be a Banking Master",
    image: "be-a-banking-master.png",
    description: "Basic To Advance",
    subjects: [
      {
        id: "Roel of Priority Sectore and MSMES",
        name: "Roel of Priority Sectore and MSMES",
        icon: "Roel of Priority Sectore and MSMES",
        image: "be-a-banking-master.png",
        description: "Basic To Advance",
        classes: [
          { id: "Roel of Priority Sectore and MSMES-01", name: "Class 01 — Roel of Priority Sectore and MSMES", duration: "20 min", video: "DR36G7kdZno" },
          { id: "Roel of Priority Sectore and MSMES-02", name: "Class 02 — Roel of Priority Sectore and MSMES", duration: "22 min", video: "DR36G7kdZno" },
          { id: "Roel of Priority Sectore and MSMES-03", name: "Class 03 — Roel of Priority Sectore and MSMES", duration: "25 min", video: "DR36G7kdZno" }
        ]
      },
      {
        id: "UPI, Aepsand Digital Banking",
        name: "UPI, Aepsand Digital Banking",
        icon: "UPI, Aepsand Digital Banking",
        image: "be-a-banking-master.png",
        description: "Basic To Advance.",
        classes: [
          { id: "UPI, Aepsand Digital Banking-01", name: "Class 01 — UPI, Aepsand Digital Banking", duration: "24 min", video: "DR36G7kdZno" },
          { id: "UPI, Aepsand Digital Banking-02", name: "Class 02 — UPI, Aepsand Digital Banking", duration: "26 min", video: "DR36G7kdZno" }
        ]
      }
    ]
  },


  // ========== 3rd Batch Folder ==========


  {
    id: "English Recorded Courses",
    name: "English Recorded Courses",
    icon: "English Recorded Courses",
    image: "english-recorded.png",
    description: "Basic To Advance.",
    subjects: [
      {
        id: "Error Dections",
        name: "Error Dections",
        icon: "Error Dections",
        image: "english-recorded.png",
        description: "Basic To Advance",
        classes: [
          { id: "Error Dections-01", name: "Class 01 — Error Dections", duration: "Video timing", video: "" },
          { id: "Error Dections-02", name: "Class 02 — Error Dections", duration: "Video timing", video: "" }
        ]
      }
    ]
  },


  // ========== 4th Batch Folder ==========

  {
    id: "Foundations Batch",
    name: "Foundations Batch",
    icon: "Foundations Batch",
    image: "foundation-batch.png",
    description: "Basic To Advanced.",
    subjects: [
      {
        id: "Time, Speed, Distances",
        name: "Time, Speed, Distances",
        icon: "Time, Speed, Distances",
        image: "foundation-batch.png",
        description: "Basic To Advanced.",
        classes: [
          { id: "Time, Speed, Distances-01", name: "Class 01 — Time, Speed, Distances", duration: "video Timing", video: "" },
          { id: "Time, Speed, Distances-02", name: "Class 02 — Time, Speed, Distances", duration: "video Timing", video: "" }
        ]
      }
    ]
  },


  // ========== 5th Batch Folder ==========


  {
    id: "Gaint 2.0",
    name: "Gaint 2.0",
    icon: "Gaint 2.0",
    image: "gaint-2.0.png",
    description: "Basic To Advance.",
    subjects: [
      {
        id: "Gaint 2.0",
        name: "Gaint 2.0",
        icon: "Gaint 2.0",
        image: "Gaint-2.0.png",
        description: "Basic To Advance",
        classes: [
          { id: "Gaint 2.0-01", name: "Class 01 — Gaint 2.0", duration: "Video timing", video: "" },
          { id: "Gaint 2.0-02", name: "Class 02 — Gaint 2.0", duration: "Video timing", video: "" }
        ]
      }
    ]
  },


  // ========== 6th Batch Folder ==========


  {
    id: "Grammer Granth",
    name: "Grammer Granth",
    icon: "Grammer Granth",
    image: "grammer-granth.png",
    description: "Basic To Advance.",
    subjects: [
      {
        id: "Grammer Granth",
        name: "Grammer Granth",
        icon: "Grammer Granth",
        image: "grammer-granth.png",
        description: "Basic To Advance",
        classes: [
          { id: "Grammer Granth-01", name: "Class 01 — Grammer Granth", duration: "Video timing", video: "" },
          { id: "Grammer Granth-02", name: "Class 02 — Grammer Granth", duration: "Video timing", video: "" }
        ]
      }
    ]
  },


  // ========== 6th Batch Folder ==========


  {
    id: "Made Easy 2.0",
    name: "Made Easy 2.0",
    icon: "Made Easy 2.0",
    image: "made-easy-2.0.png",
    description: "Basic To Advance.",
    subjects: [
      {
        id: "Made Easy 2.0",
        name: "Made Easy 2.0",
        icon: "Made Easy 2.0",
        image: "made-easy-2.0.png",
        description: "Basic To Advance",
        classes: [
          { id: "Made Easy 2.0-01", name: "Class 01 — Made Easy 2.0", duration: "Video timing", video: "" },
          { id: "Made Easy 2.0-02", name: "Class 02 — Made Easy 2.0", duration: "Video timing", video: "" }
        ]
      }
    ]
  },

];


const cards = document.getElementById("cards");
const viewKicker = document.getElementById("viewKicker");
const viewTitle = document.getElementById("viewTitle");
const countLabel = document.getElementById("countLabel");
const breadcrumbs = document.getElementById("breadcrumbs");
const backBtn = document.getElementById("backBtn");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");

const player = document.getElementById("player");
const videoFrame = document.getElementById("videoFrame");
const videoNotice = document.getElementById("videoNotice");
const playerTitle = document.getElementById("playerTitle");
const playerPath = document.getElementById("playerPath");
const lessonQueue = document.getElementById("lessonQueue");
const queueCount = document.getElementById("queueCount");
const toast = document.getElementById("toast");

let level = "folders";
let selectedFolder = null;
let selectedSubject = null;
let toastTimer;

function totalSubjects() {
  return library.reduce((total, folder) => total + folder.subjects.length, 0);
}

function totalClasses() {
  return library.reduce(
    (total, folder) =>
      total + folder.subjects.reduce((subjectTotal, subject) => subjectTotal + subject.classes.length, 0),
    0
  );
}

document.getElementById("folderStat").textContent = library.length;
document.getElementById("subjectStat").textContent = totalSubjects();
document.getElementById("classStat").textContent = totalClasses();

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function render() {
  player.hidden = true;

  const query = searchInput.value.trim().toLowerCase();

  if (level === "folders") {
    viewKicker.textContent = "LEARNING FOLDERS";
    viewTitle.textContent = "Choose a learning folder";

    const data = library.filter(item =>
      !query ||
      item.name.toLowerCase().includes(query) ||
      (item.description || "").toLowerCase().includes(query)
    );

    countLabel.textContent = `${data.length} ${data.length === 1 ? "folder" : "folders"}`;
    renderCards(data, "folder");
    backBtn.disabled = true;
  }

  if (level === "subjects") {
    viewKicker.textContent = selectedFolder.name.toUpperCase();
    viewTitle.textContent = "Choose a subject";

    const data = selectedFolder.subjects.filter(item =>
      !query ||
      item.name.toLowerCase().includes(query) ||
      (item.description || "").toLowerCase().includes(query)
    );

    countLabel.textContent = `${data.length} ${data.length === 1 ? "subject" : "subjects"}`;
    renderCards(data, "subject");
    backBtn.disabled = false;
  }

  if (level === "classes") {
    viewKicker.textContent = `${selectedFolder.name} · ${selectedSubject.name}`.toUpperCase();
    viewTitle.textContent = "Choose a class";

    const data = selectedSubject.classes.filter(item =>
      !query || item.name.toLowerCase().includes(query)
    );

    countLabel.textContent = `${data.length} ${data.length === 1 ? "class" : "classes"}`;
    renderCards(data, "class");
    backBtn.disabled = false;
  }

  renderBreadcrumbs();
}

function renderCards(data, type) {
  cards.innerHTML = data.map(item => {
    const tag = type === "folder" ? "FOLDER" : type === "subject" ? "SUBJECT" : "CLASS";
    const count =
      type === "folder"
        ? `${item.subjects.length} subjects`
        : type === "subject"
          ? `${item.classes.length} classes`
          : item.duration || "Video lesson";

    const action = type === "class" ? "WATCH →" : "OPEN →";

    const visual = item.image
      ? `<div class="card-image">
           <img src="${item.image}" alt="${escapeHtml(item.name)}"
             onerror="this.parentElement.classList.add('image-error');this.style.display='none'">
         </div>`
      : `<div class="card-icon">${escapeHtml(item.icon || "▶")}</div>`;

    return `
      <article class="card" data-type="${type}" data-id="${escapeHtml(item.id)}" tabindex="0" role="button">
        ${visual}
        <span class="card-tag">${tag}</span>
        <h3>${escapeHtml(item.name)}</h3>
        <p>${escapeHtml(item.description || "Video lesson")}</p>
        <div class="card-bottom">
          <span>${escapeHtml(count)}</span>
          <span class="open">${action}</span>
        </div>
      </article>`;
  }).join("");

  emptyState.hidden = data.length > 0;

  document.querySelectorAll(".card").forEach(card => {
    const open = () => openItem(card.dataset.type, card.dataset.id);
    card.addEventListener("click", open);
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function openItem(type, id) {
  if (type === "folder") {
    selectedFolder = library.find(item => item.id === id);
    selectedSubject = null;
    level = "subjects";
    searchInput.value = "";
    render();
    document.getElementById("folders").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (type === "subject") {
    selectedSubject = selectedFolder.subjects.find(item => item.id === id);
    level = "classes";
    searchInput.value = "";
    render();
    return;
  }

  if (type === "class") {
    const cls = selectedSubject.classes.find(item => item.id === id);
    openVideo(cls);
  }
}

function openVideo(cls) {
  player.hidden = false;
  playerTitle.textContent = cls.name;
  playerPath.textContent = `${selectedFolder.name} / ${selectedSubject.name} / ${cls.name}`;

  const hasVideo = typeof cls.video === "string" && /^[A-Za-z0-9_-]{11}$/.test(cls.video);

  if (hasVideo) {
    videoNotice.hidden = true;
    videoFrame.hidden = false;
    videoFrame.src = `https://www.youtube-nocookie.com/embed/${cls.video}?rel=0&modestbranding=1`;
  } else {
    videoFrame.src = "";
    videoFrame.hidden = true;
    videoNotice.hidden = false;
  }

  queueCount.textContent = `${selectedSubject.classes.length} lessons`;

  lessonQueue.innerHTML = selectedSubject.classes.map((item, index) => `
    <div class="queue-item ${item.id === cls.id ? "active" : ""}" data-id="${escapeHtml(item.id)}" tabindex="0" role="button">
      <b>${String(index + 1).padStart(2, "0")} · ${escapeHtml(item.name)}</b>
      <small>${escapeHtml(item.duration || "Video not added")}</small>
    </div>
  `).join("");

  lessonQueue.querySelectorAll(".queue-item").forEach(item => {
    const play = () => {
      const next = selectedSubject.classes.find(clsItem => clsItem.id === item.dataset.id);
      openVideo(next);
    };

    item.addEventListener("click", play);
    item.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        play();
      }
    });
  });

  player.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderBreadcrumbs() {
  let html = `<button data-level="folders" class="${level === "folders" ? "current" : ""}">All Folders</button>`;

  if (selectedFolder) {
    html += `<span class="sep">/</span>
      <button data-level="subjects" class="${level === "subjects" ? "current" : ""}">
        ${escapeHtml(selectedFolder.name)}
      </button>`;
  }

  if (selectedSubject) {
    html += `<span class="sep">/</span>
      <button data-level="classes" class="${level === "classes" ? "current" : ""}">
        ${escapeHtml(selectedSubject.name)}
      </button>`;
  }

  breadcrumbs.innerHTML = html;

  breadcrumbs.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      if (button.dataset.level === "folders") {
        level = "folders";
        selectedFolder = null;
        selectedSubject = null;
      }

      if (button.dataset.level === "subjects") {
        level = "subjects";
        selectedSubject = null;
      }

      if (button.dataset.level === "classes") {
        level = "classes";
      }

      searchInput.value = "";
      render();
    });
  });
}

backBtn.addEventListener("click", () => {
  if (level === "classes") {
    level = "subjects";
    selectedSubject = null;
  } else if (level === "subjects") {
    level = "folders";
    selectedFolder = null;
  }

  searchInput.value = "";
  render();
});

searchInput.addEventListener("input", render);

document.getElementById("heroSearchBtn").addEventListener("click", () => {
  document.getElementById("folders").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => searchInput.focus(), 350);
});

document.getElementById("closePlayer").addEventListener("click", () => {
  videoFrame.src = "";
  player.hidden = true;
});

document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("light");
  const theme = document.body.classList.contains("light") ? "light" : "dark";
  localStorage.setItem("sahil-elevate-theme", theme);
});

if (localStorage.getItem("sahil-elevate-theme") === "light") {
  document.body.classList.add("light");
}

render();
