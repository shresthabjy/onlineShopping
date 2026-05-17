using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineShopEdmx.Model;
using OnlineShopping.Repository;
using OnlineShopping.ViewModel;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineShopping.Controllers
{
    public class UserController : Controller
    {
        public GenericUnitOfWork _unitOfWork = new GenericUnitOfWork();
        private Populator populator = new Populator();

        private readonly IHostingEnvironment hostingEnvo;

        public UserController(IHostingEnvironment hostingEnvo)
        {

            this.hostingEnvo = hostingEnvo;
        }
        public async Task<IActionResult> Index()
        {
            return await Task.Run(() => View(new UserViewModelLst
            {
                dbModelLst = _unitOfWork.GetRepositoryInstance<UserDetail>().GetAllRecordsIQueryable().ToList()
            }));
        }
        public ActionResult Create()
        {
            return PartialView(new UserViewModel
            {
                ddlCategory= populator.GetIntStringPairModel("Category"),
                ddlIsActive = populator.GetPairModel("IsActive"),
                dbModel = new UserDetail
                {
                    IsDelete = false,
                    CreatedDate = DateTime.Now
                }

            });
        }
        [HttpPost]
        public ActionResult Create(UserViewModel tbl, IFormFile file)
        {
            string uniqueFileName = null;
            if (tbl.image != null)
            {
                if (imageValidation(tbl.image.FileName) == true)
                {
                    string uploadsFolder = Path.Combine(hostingEnvo.WebRootPath, "UserImages");
                    uniqueFileName = Guid.NewGuid().ToString() + "_" + tbl.image.FileName;
                    string filePath = Path.Combine(uploadsFolder, uniqueFileName);
                    tbl.image.CopyTo(new FileStream(filePath, FileMode.Create));
                }
            }
            tbl.dbModel.CreatedDate = tbl.dbModel.UpdatedDate = DateTime.Now;
            _unitOfWork.GetRepositoryInstance<UserDetail>().Add(tbl.dbModel);
            return RedirectToAction("Create");
        }
        public ActionResult Edit(int id)
        {
            return PartialView(new UserViewModel
            {
                ddlCategory = populator.GetIntStringPairModel("Category"),
                dbModel = _unitOfWork.GetRepositoryInstance<UserDetail>().GetFirstorDefault(id),
                ddlIsActive = populator.GetPairModel("IsActive"),
            });
        }

        [HttpPost]
        public ActionResult Edit(UserViewModel tbl)
        {
            string uniqueFileName = null;
            if (tbl.image != null)
            {
                if (imageValidation(tbl.image.FileName) == true)
                {
                    string uploadsFolder = Path.Combine(hostingEnvo.WebRootPath, "UserImages");
                    uniqueFileName = Guid.NewGuid().ToString() + "_" + tbl.image.FileName;
                    string filePath = Path.Combine(uploadsFolder, uniqueFileName);
                    tbl.image.CopyTo(new FileStream(filePath, FileMode.Create));
                }
            }
            tbl.dbModel.UpdatedDate = DateTime.Now;
            _unitOfWork.GetRepositoryInstance<UserDetail>().Update(tbl.dbModel);
            return RedirectToAction("Index");
        }
        public bool imageValidation(String imageName = "null.doc")
        {
            string ext = System.IO.Path.GetExtension(imageName);
            switch (ext)
            {
                case (".jpg"):
                    return true;
                    break;
                case ".png":
                    return true;
                    break;
                case ".gif":
                    return true;
                    break;
                case ".jpeg":
                    return true;
                    break;
                case null:
                    return true;
                    break;
                default:
                    return false;
            }
        }
    }
}