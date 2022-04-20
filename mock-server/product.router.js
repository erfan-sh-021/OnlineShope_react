const router = require("express").Router();
const _ = require("lodash");

const data = {
  products: [{
      id: '1',
      title: "Acer Predator Helios 300",
      price: "23.000.000 Toman",
      pic: "https://m.media-amazon.com/images/I/71YQNrXmFhL._AC_SY355_.jpg",
      desc: `پردازنده 6 هسته ای اینتل Core i7-9750H نسل نهم (تا 4. 5 گرم هرتز) با ویندوز 10 خانگی 64 بیتی گرافیک NVIDIA GeForce GTX 1660 Ti با 6 گیگابایت حافظه اختصاصی GDDR6 VRAM 15. 6 اینچ Full HD (1820 x Wide) صفحه‌نمایش IPS با نور پس‌زمینه (نرخ تازه‌سازی 144 هرتز، زمان پاسخگویی Overdrive 3 میلی‌ثانیه، روشنایی 300 نیت و 72 درصد NTSC) حافظه 16 گیگابایتی DDR4 2666 مگاهرتز، 512 گیگابایت PCIe NVMe SSD (2 x PCIe M. 2 اسلات برای آسان 1 - درجه‌های ارتقاء) صفحه کلید موجود با نور پس زمینه هارد درایو | LAN: Killer Gaming Network E2500 | بی سیم: Killer DoubleShot Pro Wireless-AX 1650 WiFi 6 802. 11ac | نسل چهارم فن تمام فلزی AeroBlade 3D`,
      comments: [{
          author: 'علی رضا',
          text: `این لپ تاپ رو پدر مادرم برای من گرفتن .برای بازی های سبک مناسب هستش .باریش شارژ رو خوب نگه میداره  راضی ام در کل`
        },
        {
          author: 'محمد',
          text: 'لپ تاپ خیلی خوبیه نسبت به قیمتش. بازی ها رو با تاخیر صفر اجرا می کند. من خوش شانس بودم که اونو  با قیمت  23.000.000 تومان دریافت کردم،.'
        }
      ]
    },
    {
      id: '2',
      title: "ROG Zephyrus G15 (2020)",
      price: "27.000.000 Toman",
      pic: "https://m.media-amazon.com/images/I/81ef5sbZznL._AC_SY450_.jpg",
      desc: `NVIDIA GeForce GTX 1660 Ti 6GB GDDR6 with ROG Boost (Base 1140MHz Boost 1335MHz TDP 60W)
      پردازنده AMD Ryzen 7 4800HS (تا 4.2 گیگاهرتز)
      صفحه نمایش 15.6 اینچی 144 هرتز از نوع IPS Full HD (1920x1080)
      رم 16 گیگابایتی 3200 مگاهرتز DDR4 | SSD 1 ترابایتی PCIe NVMe M 2 | صفحه کلید بازی دقیق با نور پس زمینه | Windows 10 Home
      ضخامت 0.8 اینچی، 4.85 پوندی فوق العاده قابل حمل
      Gig+ Wi-Fi 6 (802.11ax) | قابلیت شارژ USB Type-C
      سیستم خنک کننده هوشمند ROG با تونل های ضد گرد و غبار خود تمیز شونده عملکرد خنک کننده و پایداری سیستم را حفظ می کند.`,
    },
    {
      id: '3',
      title: "Lenovo Ideapad L340 ",
      price: "20.000.000 Toman",
      pic: "https://images-na.ssl-images-amazon.com/images/I/81XvT%2BahkoL._AC_SX679_.jpg",
      desc: `بعد جدیدی از عملکرد بازی در انتظار شماست - با پردازنده‌های نسل نهم اینتل Core i5، بازی IdeaPad L340 قدرتی را دارد که برای پیشی گرفتن، پیشی گرفتن و پیشی گرفتن از هر کسی نیاز دارید. شامل 8 گیگابایت رم DDR4 و 512 گیگابایت NVMe SSD
      آن را به سطح بعدی ببرید - با آخرین گرافیک NVIDIA GeForce در پشت سر خود، می‌توانید داغ‌ترین عناوین را با گیم‌پلی سریع‌تر، روان‌تر و کم مصرف‌تر رام کنید. به علاوه، صفحه نمایش 15.6 اینچی یک صفحه نمایش IPS فول اچ دی خیره کننده با رزولوشن 1920 در 1080 ارائه می کند.
      درگاهی برای ابعاد صدای جدید - که در هر بازی IdeaPad L340 متصل شده است، فناوری پیشرفته Dolby Audio است. تجربه بازی‌های موبایلی خود را به بعد دیگری ببرید و در طول مسیر لذتی واقعی داشته باشید
      سرنوشت خود را کنترل کنید - GAME در حالت "سریع" یا کار در حالت "آرام". این تماس شما با یک تنظیم عملکرد ساده است که به شما امکان می دهد فوراً دنده را بین حالت ها تغییر دهید.
      محصول نهایی ممکن است کمی با تصویر متفاوت باشد`,
    },
    {
      id: '4',
      title: "2021 ASUS TUF Gaming A17",
      price: "18.000.000 Toman",
      pic: "https://m.media-amazon.com/images/I/71P8c4cuCDS._AC_SY450_.jpg",
      desc: `چهار هسته ای AMD Ryzen 5 3550H (کش 2M، تا 3.7 گیگاهرتز)
      گرافیک AMD Radeon RX560X
      صفحه نمایش 17. 3 اینچی FHD (1920x1080) نوع IPS
      512 گیگابایت PCIe NVMe M. 2 SSD | 8 گیگابایت رم DDR4 | Windows 10 Home
      طراحی قابل حمل با لپ تاپ گیمینگ با مشخصات نازک 1.02 اینچی
      فن دوگانه با فناوری ضد گرد و غبار
      صفحه کلید با نور پس‌زمینه قرمز با دوام 20 میلیون ضربه‌ای کلید`,
    },
    {
      id: '5',
      title: '2019 ASUS TUF 17.3"',
      price: "20.000.000 Toman",
      pic: "https://images-na.ssl-images-amazon.com/images/I/61UUq%2BRQTXL._AC_SX466_.jpg",
      desc: `APU قدرتمند AMD Ryzen 7 3750H چهار هسته ای (فرکانس پایه 2. 3 گیگاهرتز، تا فرکانس انفجاری 4. 0 گیگاهرتز) سریع و همه کاره است، با چهار هسته و هشت رشته که قادر به انجام کارهای روزمره هستند.
      17. صفحه نمایش LED عریض 3 اینچی Full HD Full HD (1920 x 1080) دارای رنگ و وضوح چشمگیر است. گرافیک NVIDIA GeForce GTX 1650 با پشتیبانی از حافظه ویدیویی اختصاصی 4 گیگابایتی GDDR5 برای یک پردازنده گرافیکی فوق سریع و پیشرفته برای سوخت بازی های شما.
      حافظه 8 گیگابایتی DDR4 با فرکانس 2400 مگاهرتز برای چندوظیفگی کامل. 512 گیگابایت M. 2 NVMe PCIe SSD برای عملکرد سریعتر و قابلیت اطمینان بهتر. SSD های Pci-e برای برنامه های اصلی بازی، چندین سرور، پشتیبان گیری روزانه و موارد دیگر عالی هستند.
      802. 11 Wireless-AC + بلوتوث 4. 2، 1 x USB 3. 1، 1 x USB 2. 0، 1 x HDMI 2. 0
      Windows 10 Home 64 بیتی; صفحه‌کلید با نور پس‌زمینه RGB به شما امکان می‌دهد از تایپ راحت و دقیق، حتی در نور کم لذت ببرید.`,
    },
    {
      id: '6',
      title: "Acer Predator Helios 300",
      price: "23.500.000 Toman",
      pic: "https://images-na.ssl-images-amazon.com/images/I/61rjV21bzfL._AC_SX355_.jpg",
      desc: `پردازنده 6 هسته ای Intel Core i7-8750H نسل هشتم (تا 4.1 گیگاهرتز) با Windows 10 Home 64 بیتی
      کارت گرافیک NVIDIA GeForce GTX 1060 با قابلیت اورکلاک با 6 گیگابایت VRAM اختصاصی GDDR5
      صفحه نمایش 15.6 اینچی Full HD (1920 x 1080) صفحه نمایش عریض LED با نور پس زمینه IPS (نرخ تازه سازی 144 هرتز، روشنایی 300 نیت و 72٪ NTSC)
      حافظه DRAM 16 گیگابایتی DDR4 2666 مگاهرتز و SSD 256 گیگابایتی PCIe NVMe | اسلات خالی اضافی برای هارد دیسک 2.5 اینچی یا SSD. حداکثر توان منبع تغذیه: 180 وات
      Wi-Fi گیگابیتی | صفحه کلید با نور پس زمینه | USB 3.1 (نوع C) | خنک کننده فن سه بعدی AeroBlade دوگانه تمام فلزی | شاسی فلزی.ظرفیت باتری: 3320 میلی آمپر ساعت
      عمر باتری تا 7 ساعت`,
    },
  ],
};
router.get("/", (req, res) => {
  res.json(data.products);
});

router.get("/:id", (req, res) => {
  res.json(_.find(data.products, {
    id: req.params.id
  }));
});

router.get("/:id/comments", (req, res) => {
  res.json(_.get(_.find(data.products, {
    id: req.params.id
  }), 'comments'));
});


router.post("/:id/comments", (req, res) => {
  const product = _.find(data.products, {
    id: req.params.id
  });
  if (product) {
    product.comments = product.comments || [];
    product.comments.push(req.body);
    res.end();
  } else {
    res.status(404).json(new Error('Product not found'));
  }
});

module.exports = router;