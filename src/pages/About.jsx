
import React from "react";
const calculators = [
  {
    id: 1,
    name: "Basic Calculator",
    symbol: "Addition, subtraction, multiplication, division and percentage",
  },
  {
    id: 2,
    name: "Percentage Calculator",
    symbol: "Calculate percentages quickly",
  },
  {
    id: 3,
    name: "Simple Interest Calculator",
    symbol: "Calculate simple interest using Principal, Rate and Time",
  },
  {
    id: 4,
    name: "Compound Interest",
    symbol: "Calculate compound interest",
  },
  {
    id: 5,
    name: "BMI Calculator",
    symbol: "Calculate Body Mass Index using height and weight",
  },
  {
    id: 6,
    name: "Age Calculator",
    symbol: "Calculate age using date, month and year",
  },
  {
    id: 7,
    name: "Loan / EMI Calculator",
    symbol: "Calculate loan EMI and repayment details",
  },
  {
    id: 8,
    name: "GST Calculator",
    symbol: "Calculate GST using price and tax percentage",
  },
  {
    id: 9,
    name: "Discount Calculator",
    symbol: "Calculate discounts and final prices",
  },
  {
    id: 10,
    name: "Profit / Loss Calculator",
    symbol: "Calculate profit or loss using cost and selling prices",
  },
  {
    id: 11,
    name: "Area of Circle",
    symbol: "Calculate the area using radius",
  },
  {
    id: 12,
    name: "Area of Rectangle",
    symbol: "Calculate the area using length and breadth",
  },
  {
    id: 13,
    name: "Area of Triangle",
    symbol: "Calculate the area using base and height",
  },
  {
    id: 14,
    name: "Distance Calculator",
    symbol: "Calculate distance using speed and time",
  },
  {
    id: 15,
    name: "Speed Calculator",
    symbol: "Calculate speed using distance and time",
  },
  {
    id: 16,
    name: "Time Calculator",
    symbol: "Calculate time using distance and speed",
  },
  {
    id: 17,
    name: "Temperature Converter",
    symbol: "Convert between Celsius and Fahrenheit",
  },
  {
    id: 18,
    name: "Scientific Calculator",
    symbol: "Perform advanced calculations such as sin, cos and tan",
  },
  {
    id: 19,
    name: "Currency Calculator",
    symbol: "Perform currency-related calculations",
  },
  {
    id: 20,
    name: "Unit Converter",
    symbol: "Convert different units such as kilometres, metres and more",
  },
  {
    id: 21,
    name: "Quadratic Calculator",
    symbol: "Solve quadratic equations",
  },
];

function About() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      {/* ================= HERO ================= */}

      <section className="bg-linear-to-r from-blue-600 to-purple-600 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-5xl">

          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            About Calculator Hub
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-blue-50 md:text-xl">
            A complete collection of useful calculators and converters
            designed to make everyday calculations simple, fast and easy.
          </p>

        </div>
      </section>

      {/* ================= ABOUT PROJECT ================= */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">

          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Our Project
            </h2>

            <div className="mx-auto mt-4 h-1 w-20 rounded bg-blue-600"></div>
          </div>

          <div className="space-y-5 text-center text-lg leading-8 text-slate-600">

            <p>
              Calculator Hub is a full-stack web application that provides
              multiple calculators in one platform.
            </p>

            <p>
              Users can perform mathematical, financial, educational and
              conversion-related calculations from a single website.
            </p>

            <p>
              The application is built using modern web technologies.
              React is used for the frontend, Spring Boot is used for the
              backend REST APIs, and MySQL is used for database storage.
            </p>

          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGY STACK ================= */}

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Technology Stack
            </h2>
            <p className="mt-4 text-slate-500">
              Technologies used to build Calculator Hub
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">

            {/* React */}

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-5 text-5xl">
                ⚛️
              </div>
              <h3 className="mb-3 text-2xl font-bold">
                React
              </h3>
              <p className="leading-7 text-slate-600">
                React is used to build the interactive frontend,
                calculator components, forms and user interface.
              </p>
            </div>
            {/* Spring Boot */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-5 text-5xl">
                ☕
              </div>
              <h3 className="mb-3 text-2xl font-bold">
                Spring Boot
              </h3>
              <p className="leading-7 text-slate-600">
                Spring Boot is used to create REST APIs, backend
                business logic and communication with the database.
              </p>
            </div>

            {/* MySQL */}

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-5 text-5xl">
                🗄️
              </div>
              <h3 className="mb-3 text-2xl font-bold">
                MySQL
              </h3>
              <p className="leading-7 text-slate-600">
                MySQL is used to store application data, users,
                calculation records and other persistent information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ARCHITECTURE ================= */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Application Architecture
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">

            {/* Frontend */}

            <div className="w-full rounded-2xl bg-blue-600 p-8 text-center text-white shadow-lg md:w-72">

              <div className="mb-3 text-4xl">
                ⚛️
              </div>

              <h3 className="text-xl font-bold">
                React Frontend
              </h3>

              <p className="mt-2 text-blue-100">
                User Interface
              </p>

            </div>

            <div className="text-3xl font-bold text-slate-400 md:rotate-0 rotate-90">
              →
            </div>

            {/* Backend */}

            <div className="w-full rounded-2xl bg-green-600 p-8 text-center text-white shadow-lg md:w-72">

              <div className="mb-3 text-4xl">
                ☕
              </div>

              <h3 className="text-xl font-bold">
                Spring Boot
              </h3>

              <p className="mt-2 text-green-100">
                REST API & Business Logic
              </p>

            </div>

            <div className="text-3xl font-bold text-slate-400 md:rotate-0 rotate-90">
              →
            </div>

            {/* Database */}

            <div className="w-full rounded-2xl bg-purple-600 p-8 text-center text-white shadow-lg md:w-72">

              <div className="mb-3 text-4xl">
                🗄️
              </div>

              <h3 className="text-xl font-bold">
                MySQL
              </h3>

              <p className="mt-2 text-purple-100">
                Database Storage
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ================= CALCULATORS ================= */}

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">

            <h2 className="text-3xl font-bold md:text-4xl">
              Our Calculators
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Calculator Hub currently provides 21 different calculators
              and conversion tools.
            </p>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {calculators.map((calculator) => (

              <div
                key={calculator.id}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg"
              >

                <div className="mb-5 flex items-center justify-between text-center">

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {calculator.id}
                  </span>

                  <span className="rounded-lg bg-slate-100 px-2 ml-5 py-3 text-sm font-medium text-slate-600">
                    {calculator.symbol}
                  </span>

                </div>

                <h3 className="text-lg font-bold text-slate-800 transition group-hover:text-blue-600">
                  {calculator.name}
                </h3>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">

            <h2 className="text-3xl font-bold md:text-4xl">
              Why Calculator Hub?
            </h2>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl bg-white p-7 text-center shadow-sm">
              <div className="mb-4 text-4xl">⚡</div>

              <h3 className="mb-3 text-xl font-bold">
                Fast
              </h3>

              <p className="text-sm leading-6 text-slate-500">
                Perform calculations quickly without complicated steps.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 text-center shadow-sm">
              <div className="mb-4 text-4xl">🎯</div>

              <h3 className="mb-3 text-xl font-bold">
                Easy to Use
              </h3>

              <p className="text-sm leading-6 text-slate-500">
                Simple interfaces make the calculators easy for everyone.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 text-center shadow-sm">
              <div className="mb-4 text-4xl">📱</div>

              <h3 className="mb-3 text-xl font-bold">
                Responsive
              </h3>

              <p className="text-sm leading-6 text-slate-500">
                Designed to work across desktop, tablet and mobile devices.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 text-center shadow-sm">
              <div className="mb-4 text-4xl">🔧</div>

              <h3 className="mb-3 text-xl font-bold">
                Multiple Tools
              </h3>

              <p className="text-sm leading-6 text-slate-500">
                Access mathematical, financial and conversion tools
                from one application.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FUTURE ================= */}

      <section className="bg-slate-100 px-6 py-20">
        <div className="mx-auto max-w-4xl">

          <div className="mb-10 text-center">

            <h2 className="text-3xl font-bold md:text-4xl">
              Future Improvements
            </h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {[
              "User Authentication",
              "Calculation History",
              "Save Calculations",
              "Dark / Light Theme",
              "More Scientific Functions",
              "Live Currency Exchange Rates",
              "PDF Calculation Reports",
              "User Dashboard",
              "Admin Dashboard",
            ].map((item, index) => (

              <div
                key={index}
                className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  ✓
                </span>

                <span className="font-medium">
                  {item}
                </span>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <section className="bg-slate-900 px-6 py-20 text-center text-white">

        <h2 className="text-3xl font-bold md:text-4xl">
          Calculate Smarter. Learn Better.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
          Calculator Hub brings useful calculation tools together
          in one simple full-stack application built with React,
          Spring Boot and MySQL.
        </p>

      </section>

    </div>
  );
}

export default About;
