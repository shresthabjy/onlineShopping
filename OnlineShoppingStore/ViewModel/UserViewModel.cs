
using Microsoft.AspNetCore.Http;
using OnlineShopEdmx.Model;
using OnlineShopping.Models;
using OnlineShopping.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineShopping.ViewModel
{
    public class UserViewModel
    {
        public UserDetail dbModel { get; set; }
        public IEnumerable<PairModel> ddlIsActive { get; set; }
        public IEnumerable<IntStringPairModel> ddlCategory { get; set; }
        public IEnumerable<IntStringPairModel> ddlProductFeature { get; set; }
        public IFormFile image { get; set; }
    }

    public class UserViewModelLst
    {
        public IEnumerable<UserDetail> dbModelLst { get; set; }
    }
}
