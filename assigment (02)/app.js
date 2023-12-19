let arr = [
  {
    brand: "samsung",
    model: "samsungA30",
    price: "40000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "samsung",
    model: "samsungA10",
    price: "40000",
    camera: "40px",
    ram: "4gb",
    rom: "128gb",
  },
  {
    brand: "samsung",
    model: "samsungA20",
    price: "40000",
    camera: "40px",
    ram: "4gb",
    rom: "128gb",
  },
  {
    brand: "vivo",
    model: "vivoY20",
    price: "20000",
    camera: "40px",
    ram: "2gb",
    rom: "32gb",
  },
  {
    brand: "vivo",
    model: "vivoY11",
    price: "20000",
    camera: "40px",
    ram: "3gb",
    rom: "32gb",
  },
  {
    brand: "vivo",
    model: "vivoY15",
    price: "30000",
    camera: "40px",
    ram: "4gb",
    rom: "64gb",
  },
  {
    brand: "motorola",
    model: "motorola123",
    price: "5000",
    camera: "2px",
    ram: "2gb",
    rom: "32gb",
  },
  {
    brand: "iphone",
    model: "iphone12",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "iphone",
    model: "iphone13",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "iphone",
    model: "iphoneX",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
];

const render_Result = () => {
  const sarchinp = document.getElementById("sarchinp")

  // console.log(sarchinp);

  const inpsarh = document.getElementById("inpsarh")

  const select_btn = document.getElementById("select_btn").value;

  const reslt = document.getElementById("reslt");

  const filter = arr.filter((o) => {
    let value_Search = o[select_btn]
    return value_Search.includes(inpsarh.value.toLowerCase())
     
  });

  if (filter.length > 0) {
    reslt.innerHTML = "";
    filter.forEach((o) => {
      reslt.innerHTML += `
          <li>Model: ${o.model}</li>
          <li>Brand: ${o.brand}</li>
          <li>Price: Rs.${o.price}</li>
          <li>Camera: ${o.camera}</li>
          <li>Ram: ${o.ram} gb</li>
          <li>Rom: ${o.rom} gb</li>
          <hr>
        `;
    });
  } else {
    reslt.innerHTML = "Result Not Found?";
  }
};
