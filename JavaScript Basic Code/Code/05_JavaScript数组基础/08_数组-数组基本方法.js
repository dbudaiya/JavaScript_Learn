  // // 任何数据类型
    // let arrObject = [
    //   {a:'budai'},
    //   function () {
    //     return true;
    //   },
    //   ["a",'b','c']
    // ];
    // let arrKeyname =  Object.keys(arrObject)
    //
    // document.write(arrKeyname)
    // console.log(arrObject[1])
    // console.log(arrObject[2]["2"])
    //
    let arr = ["布袋","中国农业银行","中国工商银行","中国建设银行"];
    //
    // arr.forEach(function (index) {
    //   console.log(index)
    // })
    //
    // arr[arr.length] = false;
    // for(let keys in arr){
    //   console.log(arr[keys])
    // }
    //
    // let a = [,null,,];
    // console.log(a[1]);
    // console.log(a.length);
    //
    // console.log("1" in a)
    //
    let obj1 = {
      a:'a1',
      b:'b1',
      c:'c1'
    }
    console.log(obj1.a)
    console.log(1 in obj1)
    
    let arrPush = arr.push("北京银行","香港银行",{},[],function () {
      return;
    });
    console.log(arr)
    console.log(arrPush)

    console.log(arr.join("|"));