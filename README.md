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

# FIX สำหรับ Oracle On Windows 10 , 11
- ตรวจสอบ Supported Oracle Database Versions
  https://node-oracledb.readthedocs.io/en/latest/user_guide/installation.html
  
- download https://www.oracle.com/database/technologies/instant-client/winx64-64-downloads.html

- ติดตั้ง instantclient ไว้ที่ไหนก็ได้
  
- ตั้งค่า system Environment Variables

![image](https://github.com/dev-nirawit/his-connect/assets/104845560/05491030-f202-4f9d-8dec-f7c43d9e3a05)

