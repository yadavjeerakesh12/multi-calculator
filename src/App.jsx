import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from './pages/NavBar';
import Contact from './pages/Contact';
import Copyright from './pages/Footer';
import BasicCalculator from './Sources/BasicCalculator';
import Percentage from './Sources/Percentage';
import Age from './Sources/Age';
import BMI from './Sources/BMI';
import Circle from './Sources/Circle';
import Compound from './Sources/Compound';
import Currency from './Sources/Currency';
import Discount from './Sources/Discount';
import Distance from './Sources/Distance';
import GST from './Sources/GST';
import Loan from './Sources/Loan';
import Profit from './Sources/Profit';
import Rectangle from './Sources/Rectangle';
import Scientific from './Sources/Scientific';
import Simple from './Sources/Simple';
import Speed from './Sources/Speed';
import Temperature from './Sources/Temperature';
import Time from './Sources/Time';
import Triangle from './Sources/Triangle';
import Unit from './Sources/Unit';
import Quadratic from './Sources/Quadratic';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoot';
import Swal from 'sweetalert2';
function App() {
  const data = [
    {
      "path": "/",
      "content": <Home />
    },
    {
      "path": "/about",
      "content": <About />
    },
    {
      "path": "/contact",
      "content": <Contact />
    },
    {
      "path": "/basicCalculator",
      "content": <BasicCalculator />
    },
    {
      "path": "/percentage",
      "content": <Percentage />
    },
    {
      "path": "/age",
      "content": <Age />
    },
    {
      "path": "/bmi",
      "content": <BMI />
    },
    {
      "path": "/circle",
      "content": <Circle />
    },
    {
      "path": "/compound",
      "content": <Compound />
    },
    {
      "path": "/currency",
      "content": <Currency />
    },
    {
      "path": "/discount",
      "content": <Discount />
    }
    ,
    {
      "path": "/distance",
      "content": <Distance />
    }
    ,
    {
      "path": "/gst",
      "content": <GST />
    }
    ,
    {
      "path": "/loan",
      "content": <Loan />
    }
    ,
    {
      "path": "/profit",
      "content": <Profit />
    }
    ,
    {
      "path": "/rectangle",
      "content": <Rectangle />
    }

    ,
    {
      "path": "/scientific",
      "content": <Scientific />
    }
    ,
    {
      "path": "/simple",
      "content": <Simple />
    }
    ,
    {
      "path": "/speed",
      "content": <Speed />
    }
    ,
    {
      "path": "/temperature",
      "content": <Temperature />
    }
    ,
    {
      "path": "/time",
      "content": <Time />
    }
    ,
    {
      "path": "/triangle",
      "content": <Triangle />
    }
    ,
    {
      "path": "/unit",
      "content": <Unit />
    }
    ,
    {
      "path": "/quadratic",
      "content": <Quadratic />
    }
    // {
    //   "path":"/login",
    //   "content":<Login/>
    // }
  ];

  const [use, setUse] = useState(null);
  async function getdata() {
    const {
      data: { session },
      error: sessionError
    } = await supabase.auth.getSession();

    if (sessionError) {
      Swal.fire({
        title: "Session Error",
        text: sessionError.message,
        icon: "error",
        confirmButtonText: "OK"
      });
      setUse(null);
      return;
    }

    // User is not logged in
    if (!session) {
      // console.log("No active session");
      setUse(null);
      return;
    }
    const {
      data: { user },
      error: userError
    } = await supabase.auth.getUser();
    if (userError) {
      Swal.fire({
        title: "User Error",
        text: userError.message,
        icon: "error",
        confirmButtonText: "OK"
      });
      setUse(null);
      return;
    }
    if (user) {
      setUse(user.user_metadata.name);
    }
  }
  useEffect(() => {
    getdata();
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((event, session) => {
      // console.log("Auth Event:", event);
      if (session) {
        getdata();
      } else {
        setUse(null);
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      Swal.fire({
        title: "During Logout Error Detected!",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK"
      });
    } else {
      setUse(null);
      Swal.fire({
        title: "Successful",
        text: "Logout Done",
        icon: "success",
        confirmButtonText: "OK"
      }).then(() => {
        window.location.href = "/login";
      });
    }
  }

  return (
    <>
      <NavBar use={use} handleLogout={handleLogout} />
      <Routes>
        {<Route path='/login' element={<Login />} />}
        {data.map((item) => (
          <Route path={item.path} element={
            <ProtectedRoute>
              {item.content}
            </ProtectedRoute>
          } />
        ))}
      </Routes>
      <Copyright />
    </>
  )
}

export default App
