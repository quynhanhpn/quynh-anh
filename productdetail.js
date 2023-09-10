var cakes = [
    {
        id: 1,
        cakeName:"Harvest Moonbox",
        cakePrice:"720.000",
        cakeDes:"Harvest Moonbox tượng trưng cho một mùa trăng đủ đầy, được tận hưởng những thành quả đã “gặt hái” sau thời gian cần mẫn gieo trồng. Là hộp quà được thiết kế độc đáo cùng 4 hương vị bánh trung thu đầy sáng tạo và hộp thiếc được làm riêng cho mỗi vị; đây sẽ là món quà tuyệt vời cho gia đình, bạn bè, đồng nghiệp, và cả bản thân.",
        
        cakeImg:["/picture/Harvest Moonbox.jpg","/picture/Harvest Moonbox-1.jpg-2","/picture/Harvest Moonbox-2.jpg-3" ],
        cakeType:["🥮 Thập Cẩm Iberico", "🥮 Xôi Bắp","🥮 Vải Ngọt","🥮 Lava Hạt Điều"]
    },
    {
        id: 2,
        cakeName:"Bloom Moonbox",
        cakePrice:"1.260.000",
        cakeDes:"Phiên bản giới hạn “Bloom Moonbox” có một trải nghiệm mở “tròn đầy” độc đáo, giúp chiếc hộp thay đổi hình dạng từ bán nguyệt đến trăng tròn. Đây là một món quà ý nghĩa, truyền cảm hứng dành cho người thân, bạn bè, và đồng nghiệp.",
        
        cakeImg:["/picture/Bloom Moonbox.jpg","/picture/Bloom Moonbox-1.jpg" ,"/picture/Bloom Moonbox-2.jpg"],
        cakeType:["🥮 Thập Cẩm Iberico", "🥮 Xôi Bắp","🥮 Vải Ngọt","🥮 Lava Hạt Điều"]
    },
    {
        id: 3,
        cakeName:"Bánh Trung Thu Vị Thập Cẩm Iberico",
        cakePrice:"195.000",
        cakeDes:"Bắt nguồn từ hương Vị Cơm Tấm của Việt Nam với chút biến tấu từ thịt heo Iberico, chà bông, lạp xưởng, cốm, nấm mèo và trứng muối. Được bọc bởi lớp vỏ truyền thống màu tự nhiên từ củ dền.",
        
        cakeImg:["/picture/Bánh Trung Thu Vị Thập Cẩm Iberico.jpg","/picture/Bánh Trung Thu Vị Thập Cẩm Iberico-1.jpg","/picture/Bánh Trung Thu Vị Thập Cẩm Iberico-2.jpg" ],
        cakeType:[]
    },
    {
        id: 4,
        cakeName:"Bánh Trung Thu Vị Xôi Bắp",
        cakePrice:"195.000",
        cakeDes:"Lấy cảm hứng từ món Xôi Bắp tuổi thơ với hương vị thân thuộc từ bắp, dừa Khô, hành phi và đậu phộng rang, thêm chút biến tấu bằng các loại hoa quả sấy và hạt. Thay vì dùng lá chuối như thường lệ, Xôi Bắp từ Bakes được bọc trong lớp vỏ bánh truyền thống màu tự nhiên từ lá dứa.",
        
        cakeImg:["/picture/Bánh Trung Thu Vị Xôi Bắp.jpg","/picture/Bánh Trung Thu Vị Xôi Bắp-1.jpg","/picture/Bánh Trung Thu Vị Xôi Bắp-2.jpg"],
        cakeType:[]
    },
    {
        id: 5,
        cakeName:"Bánh Trung Thu Vị Lava Hạt Điều",
        cakePrice:"195.000",
        cakeDes:"Custard và trứng vịt muối bọc quanh lớp nhân Praliné dừa và hạt điều tan chảy, ngoài cùng là lớp vỏ truyền thống màu tự nhiên từ nghệ.",
        
        cakeImg:["/picture/Bánh Trung Thu Vị Lava Hạt Điều.jpg","/picture/Bánh Trung Thu Vị Lava Hạt Điều-1.jpg","/picture/Bánh Trung Thu Vị Lava Hạt Điều-2.jpg"],
        cakeType:[]
    },
    {
        id: 6,
        cakeName:"Bánh Trung Thu Vị Vải Ngọt",
        cakePrice:"195.000",
        cakeDes:"Sáng tạo dựa trên chiếc bánh macaron Ispahan nổi tiếng với nhân bánh làm từ vải thiều, mứt hoa hồng và quả mâm xôi khô. Không thể thiếu lớp vỏ truyền thống với màu tím tự nhiên.",
        
        cakeImg:["/picture/Bánh Trung Thu Vị Vải Ngọt.jpg","/picture/Bánh Trung Thu Vị Vải Ngọt-1.jpg","/picture/Bánh Trung Thu Vị Vải Ngọt-2.jpg"],
        cakeType:[]
    },
    {
        id: 7,
        cakeName:"Bánh Chiffon Phô Mai Brulée I",
        cakePrice:"550.000",
        cakeDes:"Bánh chiffon vani mềm xốp, phủ kem phô mai mặn, sốt caramel mặn.",
        
        cakeImg:["/picture/Bánh Chiffon Phô Mai Brulée.jpg","/picture/Bánh Chiffon Phô Mai Brulée-1.jpg","/picture/Bánh Trung Thu Vị Vải Ngọt-2.jpg"],
        cakeType:[]
    },
    {
        id: 8,
        cakeName:"Bánh Ốp La ",
        cakePrice:"550.000",
        cakeDes:"Mousse phô mai (cheesecake) bánh bông lan genoise, sốt trứng muối và kẹo bon bon trứng muối.",        
        cakeImg:["/picture/Bánh Ốp La ", "/picture/Bánh Ốp La-1", "/picture/Bánh Ốp La-2"],
        cakeType:[]
    },
    {
        id: 9,
        cakeName:"Bánh Tiramisu Trà Xanh",
        cakePrice:"395.000",
        cakeDes:"Bánh quy mềm ngâm mâm xôi & hương thảo, kem tiramisu mềm, phủ kem phô mai matcha. Hoa ăn được hữu cơ từ Đà Lạt.",
        
        cakeImg:["/picture/Bánh Tiramisu Trà Xanh","/picture/Bánh Tiramisu Trà Xanh-1","/picture/Bánh Tiramisu Trà Xanh-2"],
        cakeType:[]
    },
    {
        id: 10,
        cakeName:"Bánh Chiffon Bắp I",
        cakePrice:"550.000",
        cakeDes:"Bánh bông lan bắp tươi, kem tươi vị bắp và sữa đông bắp.",        
        cakeImg:["/picture/Bánh Chiffon Bắp I","/picture/Bánh Chiffon Bắp I-1","/picture/Bánh Chiffon Bắp I-2"],
        cakeType:[]
    },
    {
        id: 11,
        cakeName:"Bánh Mousse Me & Sá Xị ",
        cakePrice:"395.000",
        cakeDes:"Làm từ mousse me, thạch sá xị",
        
        cakeImg:["/picture/Bánh Mousse Me & Sá Xị","/picture/Bánh Mousse Me & Sá Xị-1","/picture/Bánh Mousse Me & Sá Xị-2"],
        cakeType:[]
    },
    {
        id: 12,
        cakeName:"Bánh Tiramisu Mâm Xôi I",
        cakePrice:"395.000",
        cakeDes:"Lady finger ngâm mâm xôi, dâu tây hữu cơ Đà Lạt, kem tiramisu mềm, kem tươi, dâu tươi, thạch hoa hồng và dâu.",
        
        cakeImg:["/picture/Bánh Tiramisu Mâm Xôi I","/picture/Bánh Tiramisu Mâm Xôi I-1","/picture/Bánh Tiramisu Mâm Xôi I-2"],
        cakeType:[]
    },
    {
        id: 13,
        cakeName:"Bánh Tiramisu Cổ Điển",
        cakePrice:"510.000",
        cakeDes:"Các lớp kem tiramisu và bánh ladyfingers ngâm espresso.",
        
        cakeImg:["/picture/Bánh Tiramisu Cổ Điển","/picture/Bánh Tiramisu Cổ Điển-1","/picture/Bánh Tiramisu Cổ Điển-2"],
        cakeType:["Không màu thực phẩm","Không có thành phần nhân tạo","Ít ngọt"]
    },
    {
        id: 14,
        cakeName:"Bánh Mousse Xoài Colada I",
        cakePrice:"590.000",
        cakeDes:"Bánh mousse xoài, bánh ladyfingers mềm.",
        
        cakeImg:["/picture/Bánh Mousse Xoài Colada I","/picture/Bánh Mousse Xoài Colada I-1","/picture/Bánh Mousse Xoài Colada I-2"],
        cakeType:["Không màu thực phẩm","Không có thành phần nhân tạo"]
    },
    {
        id: 15,
        cakeName:"Bánh Tiramisu Lava I",
        cakePrice:"510.000",
        cakeDes:"Với lớp kem mousse được làm từ sô-cô-la đen chất lượng cao đi cùng mứt quả dâu rừng được nấu tay và một lớp crémeux làm từ quả vanilla Madagascar.",
        
        cakeImg:["/picture/Bánh Tiramisu Lava I","/picture/Bánh Tiramisu Lava I-1"],
        cakeType:["Không màu thực phẩm","Không có thành phần nhân tạo","Ít ngọt"]
    },
    {
        id: 16,
        cakeName:"Bánh Black Forrest Magnum",
        cakePrice:"105.000",
        cakeDes:"sự kết hợp hài hoà giữa lớp kem mousse cà phê rang xay đậm đà, cùng lớp kem dừa thơm ngậy.",
        
        cakeImg:["/picture/Bánh Black Forrest Magnum.jpg","/picture/Bánh Black Forrest Magnum-1.jpg","/picture/Bánh Black Forrest Magnum-2.jpg"],
        cakeType:[]
    },
    {
        id: 17,
        cakeName:"Bánh mousse hạt dẻ và xoài",
        cakePrice:"99.000",
        cakeDes:"Lớp mousse dừa thơm ngậy, kem chanh leo chua nhẹ, lớp mứt xoài nấu tay kết hợp với bạt bánh dừa xốp mềm; cùng tạo hình được phủ bởi lớp tráng gương màu vàng rực rỡ ",
        
        cakeImg:["/picture/Bánh mousse hạt dẻ và xoài.jpg","/picture/Bánh mousse hạt dẻ và xoài-1.jpg"],
        cakeType:[]
    },
    {
        id: 18,
        cakeName:"Bánh Tart Aperol",
        cakePrice:"99.000",
        cakeDes:"Khi ăn bạn sẽ thấy vị hoa quả nhiệt đới tươi mát, xen lẫn vị ngọt chua rất dễ chịu. Được thiết kế với một chiếc vương miện xinh xắn, điểm thêm hoa cúc",
        
        cakeImg:["/picture/Bánh Tart Aperol.jpg","/picture/Bánh Tart Aperol-1.jpg"],
        cakeType:[]
    },
    {
        id: 19,
        cakeName:"Bánh Kisses sô-cô-la",
        cakePrice:"120.000",
        cakeDes:"Mousse trà earl grey, mousse cam bergamot, sốt sô-cô-la đắng, bánh sô-cô-la",
        
        cakeImg:["/picture/Bánh Kisses sô-cô-la.jpg","/picture/Bánh Kisses sô-cô-la-1.jpg"],
        cakeType:[]
    },
    {
        id: 20,
        cakeName:"Bánh Flan Phúc Bồn Tử",
        cakePrice:"80.000",
        cakeDes:"Lớp mousse ngoài cùng của chiếc bánh mang lại cảm giác thơm ngậy, mềm mịn.",
        
        cakeImg:["/picture/Bánh Flan Phúc Bồn Tử.jpg","/picture/Bánh Flan Phúc Bồn Tử-1.jpg"],
        cakeType:[]
    },
    {
        id: 21,
        cakeName:"Bánh Tart Phô Mai",
        cakePrice:"49.000",
        cakeDes:"Bánh tart phô mai nướng với creme brulée.",
        
        cakeImg:["/picture/Bánh Tart Phô Mai.jpg","/picture/Bánh Tart Phô Mai-1.jpg"],
        cakeType:[]
    },
    {
        id: 22,
        cakeName:"Bánh Tart Trứng",
        cakePrice:"49.000",
        cakeDes:"Bánh ngọt nhân sữa trứng ngọt nhẹ.",
        
        cakeImg:["/picture/Bánh Tart Trứng.jpg","/picture/Bánh Tart Trứng-1.jpg"],
        cakeType:[]
    },
    {
        id: 23,
        cakeName:"Bánh Brownie Mâm Xôi",
        cakePrice:"58.000",
        cakeDes:"Bánh brownie sô cô la, quả mâm xôi tươi (raspberry), sốt mâm xôi, hạt óc chó. Được làm từ quả mâm xôi Đà Lạt.",
        
        cakeImg:["/picture/Bánh Brownie Mâm Xôi.jpg","/picture/Bánh Brownie Mâm Xôi-1.jpg"],
        cakeType:[]
    },
    {
        id: 24,
        cakeName:"Cà Phê Latte",
        cakePrice:"75.000",
        cakeDes:"Cà phê latte với sốt caramen muối biển tự làm.",
        
        cakeImg:["/picture/Cà Phê Latte.jpg","/picture/Cà Phê Latte-1.jpg"],
        cakeType:[]
    },
    {
        id: 25,
        cakeName:"Trà Sữa Trứng Muối",
        cakePrice:"65.000",
        cakeDes:"Được làm từ sốt sữa trứng muối và kem tự làm. Không hóa chất. không bột. 100% tự làm từ nguyên liệu tự nhiên.",
        
        cakeImg:["/picture/Trà Sữa Trứng Muối.jpg","/picture/Trà Sữa Trứng Muối-1.jpg"],
        cakeType:[]
    },
    {
        id: 26,
        cakeName:"Cà Phê Sữa Việt Nam",
        cakePrice:"55.000",
        cakeDes:"Cà phê đen cùng với sữa đặc béo ngậy.",
        
        cakeImg:["/picture/Cà Phê Sữa Việt Nam.jpg","/picture/Cà Phê Sữa Việt Nam.jpg-1"],
        cakeType:[]
    },
    {
        id: 27,
        cakeName:"Dây Đeo Điện Thoại",
        cakePrice:"90.000",
        cakeDes:"Dây đeo điện thoại dành riêng cho chúng tôi từ Sugar Beady.",
        
        cakeImg:["/picture/Dây Đeo Điện Thoại.jpg","/picture/Dây Đeo Điện Thoại.jpg-1"],
        cakeType:[]
    },
    {
        id: 28,
        cakeName:"Khăn lụa",
        cakePrice:"250.000",
        cakeDes:"Khăn lụa sa tanh với hình minh họa Bakes đặt làm riêng, được thực hiện với sự hợp tác của Soul of a Nation.",
        
        cakeImg:["/picture/Khăn lụa.jpg","/picture/Khăn lụa.jpg-1"],
        cakeType:[]
    },
]
${cake.cakePrice}
${cake.cakeName}
${cake.cakeImg[0]}