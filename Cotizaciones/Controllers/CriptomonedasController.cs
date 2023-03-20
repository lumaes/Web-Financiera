using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Cotizaciones.Controllers
{
    public class CriptomonedasController : Controller
    {
        // GET: Criptomonedas
        public ActionResult Criptomonedas()
        {
            return View();
        }
    }
}