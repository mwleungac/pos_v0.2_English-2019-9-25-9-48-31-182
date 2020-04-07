'use strict';

function printReceipt(inputs) {
  console.log('Implement the exercise requirements here and rewrite the line of code.');
}

function findItemName(itemBarCode){
  let name = "";
    itemsInfo.map(item => {
      if (itemBarCode == item["barcode"]){
        name = item["name"];

      }
    })
    return name;
  }

  function findItemPrice(itemBarCode){
    let price = 0;
      itemsInfo.map(item => {
        if (itemBarCode == item["barcode"]){
          price = item["price"];
        }
      })
      return price;
    }


    function Calculate(inputdata){
      let count = 1;
      input.sort();
      var results = "";
      let tempitemname="";
      let tempitemprice=0;
      let tempitemunit=0;
      let total =0
      
      //console.log(input.sort())
      
      for (var i = 0; i < input.length; i++)
      {
          if (input[i] == input[i+1])
          {
            count +=1;      
          }
          else
          {
      
            itemsInfo.map(item => {
              if (input[i] == item["barcode"]){
              tempitemname = item["name"];
              tempitemprice = item["price"];
              tempitemunit = item["unit"];
           
         if (count>1){      //plural units
            tempitemunit = item["unit"] + "s";
          }
          else{
            tempitemunit = "";
          }
      
          }
        
        })
        
              total+=count*tempitemprice;

              results +=  "Name: " + tempitemname + ", " + "Quantity: " + count + " " + tempitemunit + ", Unit price: " + tempitemprice.toFixed(2) + " (yuen), " +  "Subtotal: " + (count*tempitemprice).toFixed(2) + " (yuan)" + "\n";
              count=1;
              
          }   
        
      }
          results +=  "Name: " + tempitemname + ", " + "Quantity: " + count + " bottles," + " " + "Unit price: " + tempitemprice.toFixed(2) + " (yuen), " +  "Subtotal: " + (count*tempitemprice).toFixed(2) + " (yuan)" + "\n"
          results += "----------------------\n";
          results += "总计：" + total.toFixed(2) + " (yuan)\n";
          results += "**********************";
          return results;
  }
      

function PrintReceipt(result) {
  let outputReceipt = "***<store earning no money>Receipt ***\n";
  outputReceipt += Calculate(input);
  return outputReceipt;

}
  console.log(PrintReceipt());
