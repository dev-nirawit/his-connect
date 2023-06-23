# HIS Connection API สำหรับ nRefer, ISOnline, และ PHER Plus

## 1.การติดตั้ง
[เอกสารขั้นตอนการติดตั้ง API](https://connect.moph.go.th/pher-plus/#/main/link)

# 2.push to git กรณีเป็นทีมพัฒนา (Develop@MOPH)
```
2.1 > git add .
2.2 > git commit -m "คำอธิบายสิ่งที่แก้ไข"
2.3 > git push origin <branch name>
2.4 กรณี push ไม่ได้ ให้ทำการ git pull ก่อน
```

# 3.ข้อควรระวัง
```
3.1 user/password ที่เข้าถึงฐานข้อมูล ควรให้สิทธิ์ select อย่างเดียว
3.2 ไม่ควรติดตั้ง API บนเครื่องที่มีผู้ใช้งานเข้าถึงได้ง่าย เพื่อป้องกันอ่าน file config
3.3 เพื่อความปลอดภัยในการเข้าถึงฐานข้อมูลส่วนกลาง ควรมีการเปลี่ยนรหัสผ่านสำหรับการส่งข้อมูล IS Online และ API Secret Key ทุก 3-6 เดือน
3.4 ควรยกเลิกการใช้งาน username ที่มีการย้ายงาน หรือ ย้ายสถานที่ทำงาน หรือ ลาออก
```

# 4.Lastupdate
```
ดูใน CHANGELOG.md
```

# 5.credit
```
- อ.สถิตย์ เรียนพิศ https://github.com/siteslave
```

# FIX สำหรับ Oracle 10g On Windows 10 , 11
- download 

    1.https://download.oracle.com/otn/nt/instantclient/185000/instantclient-basic-windows.x64-18.5.0.0.0dbru.zip

    2.https://download.oracle.com/otn/nt/instantclient/185000/instantclient-sdk-windows.x64-18.5.0.0.0dbru.zip

- ติดตั้ง instantclient + sdk  Version 18.5.0.0.0

***** ดูตัวอย่างการตั้งค่าได้ที่ https://medium.com/pnpsolution/%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%A1%E0%B8%95%E0%B9%88%E0%B8%AD-node-%E0%B8%81%E0%B8%B1%E0%B8%9A-database-oracle-22a8dcd4af9a
