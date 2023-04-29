import React from "react";
import asus from "./images/ASUS.jpg";
import apple from "./images/Apple.jpg";
import acer from "./images/Acer.jpg";
import compaq from "./images/Compaq.jpg";
import dell from "./images/Dell.jpg";
import hp from "./images/Hp.jpg";
import lenovo from "./images/Lenovo.jpg";
import msi from "./images/MSI.jpg";
import razer from "./images/Razer.jpg";
import samsung from "./images/Samsung.jpg";
const Api = [
  {
    id: 1,
    image: apple,
    name: "Apple",
    price: 99999,
    modelName: " model:Macbook pro 13-inch 2020",
    os: "Os: No",
    display: `Display: 13.3"(2660*1600)`,
    power: "Power: 10 hours",
    processor: "Processor: Quad-core 8th-gen Intel Core i5|4.1GHz",
    memory: "Memory: 256 GB SSD/8 GB DDR4"
  },
  {
    id: 2,
    image: acer,
    name: "Acer",
    price: 79979,
    modelName: "Model: Aspire",
    os: "Os: Windows 10",
    display: 'Display: 15.60"(1920*1080)',
    power: "Power: 8 Hours",
    processor: "Processor: Intel Core i7 11th Gen 7100U|2.4 GHz",
    memory: "Memory: 256 GB SSD/8 GB DDR4"
  },
  {
    id: 3,
    image: compaq,
    name: "Compaq",
    price: 65000,
    modelName: "Model: Gaming laptop",
    os: "Os: DOS",
    display: 'Display: 15.6"(1366*768)',
    power: "Power: 8 Hours",
    processor: "Processor: Intel Core i3 10th Gen|2.4 GHz",
    memory: "Memory: No SSD /4 DDR3"
  },
  {
    id: 4,
    image: dell,
    name: "Dell",
    price: 71989,
    os: "Os: DOS",
    display: 'Display: 15.60"(1820*1060)',
    power: "Power: 10 Hours",
    processor: "Processor: Quad-core 8th-gen Intel Core i5|4.1GHz",
    memory: "Memory: 256 GB SSD/8 GB DDR4"
  },
  {
    id: 5,
    image: hp,
    name: "Hp",
    price: 65999,
    modelName: "Model: HP Pavilion G6-2312AX",
    os: "Os: No",
    display: 'Display: 15.40"(1720*1040)',
    power: "Power: 8 Hours",
    processor: "processor: Quad-core 8th-gen Intel Core i5|4.1GHz",
    memory: "Memory: 256 GB SSD/8 GB DDR4"
  },
  {
    id: 6,
    image: lenovo,
    name: "Lenonvo",
    price: 75000,
    modelName: "Model: Gaming Laptop",
    os: "Os: No",
    display: 'Display: 14.60"(1620*1280)',
    power: "Power: 8 Hours",
    processor: "processor: Quad-core 8th-gen Intel Core i5|4.1GHz",
    memory: "Memory: 256 GB SSD/8 GB DDR4"
  },
  {
    id: 7,
    image: msi,
    name: "MSI",
    price: 85999,
    modelName: "Model: Gaming Laptop",
    os: "Os: DOS",
    display: 'Display: 15.60"(1920*1080)',
    power: "Power: 8 Hours",
    processor: "processor: Quad-core 8th-gen Intel Core i5|4.1GHz",
    memory: "Memory: 256 GB SSD/8 GB DDR4"
  },
  {
    id: 8,
    image: razer,
    name: "Razer",
    price: 99899,
    modelName: "Model: Gaming Laptop",
    os: "Os: No",
    display: 'Display: 14.00"(1720*1280)',
    power: "Power: 10 Hours",
    processor: "processor: Quad-core 8th-gen Intel Core i5|4.1GHz",
    memory: "Memory: 256 GB SSD/8 GB DDR4"
  },
  {
    id: 9,
    image: samsung,
    name: "Samsung",
    price: 72589,
    modelName: "Model: Galaxy Book2Pro",
    os: "Os: No",
    display: 'Display: 15.60"(1920*1080)',
    power: "Power: 6 Hours",
    processor: "processor: Quad-core 8th-gen Intel Core i5|4.1GHz",
    memory: "Memory: 256 GB SSD/8 GB DDR4"
  }
];
export default Api;
