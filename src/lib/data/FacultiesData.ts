interface Faculty {
    "_id": string;
    "name": string;
    "designation": string;
}

const FacultyData = Object.freeze([
    {
        "_id": "00",
        "name": "Dr.Sheetal Sharma",
        "designation": "Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Debashis Adhikari",
        "designation": "Professor"
    },
    {
        "_id": "00",
        "name": "Dr.S.Poonkuntran",
        "designation": "Professor"
    },
    {
        "_id": "00",
        "name": "Dr.R.Shriram",
        "designation": "Professor"
    },
    {
        "_id": "00",
        "name": "Dr Hemant Kumar Nashine",
        "designation": "Professor"
    },
    {
        "_id": "00",
        "name": "Dr.M.K.Jayanthi",
        "designation": "Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Zaheer Kareem Ansari",
        "designation": "Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Pushpinder Singh Patheja",
        "designation": "Senior Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.S Balaguru",
        "designation": "Senior Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Lakshmi.D",
        "designation": "Senior Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Pon Harshavardhanan",
        "designation": "Senior Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.I.Jasmine Selvakumari Jeya",
        "designation": "Senior Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Sasmita Padhy",
        "designation": "Senior Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Santosh Kumar Sahoo",
        "designation": "Senior Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr Komarasamy G",
        "designation": "Senior Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.S.Ananthakumaran",
        "designation": "Senior Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.J.Subash Chandra Bose",
        "designation": "Senior Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Venkat Padhy",
        "designation": "Senior Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.N.Kannaiya Raja",
        "designation": "Senior Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Manisha Jain",
        "designation": "Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Vinod Bhatt",
        "designation": "Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Mamta Agrawal",
        "designation": "Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Navneet Kumar Verma",
        "designation": "Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.M.Xavier Suresh",
        "designation": "Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Mahendran B",
        "designation": "Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Prasad Begde",
        "designation": "Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.S.Periyanayagi",
        "designation": "Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Reena Jain",
        "designation": "Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Paras Jain",
        "designation": "Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Nilamadhab Mishra",
        "designation": "Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.A.Sirajudeen",
        "designation": "Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.G.Vishnuvarthanan",
        "designation": "Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Anjali Mathur",
        "designation": "Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Abdul Rehman",
        "designation": "Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.M.Suresh",
        "designation": "Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Sandip Mal",
        "designation": "Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Gunjan Ansari",
        "designation": "Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Pavan Kumar",
        "designation": "Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Siddhartha Maiti",
        "designation": "Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.AVR Mayuri",
        "designation": "Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Preetam Suman",
        "designation": "Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Akshara Makrariya",
        "designation": "Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Hariharasitaraman.S",
        "designation": "Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Shweta Mukherjee",
        "designation": "Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Kannan Shanmugam",
        "designation": "Associate Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Neha Choubey",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Baseera A",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Manoj Acharya",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Abhay Vidyarthi",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Anant Kant Shukla",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr Muneeswaran V",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Murugeswari.K",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Swagat Samantaray",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Sivasankaran",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Balaji A",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Kumar Abhishek",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Bhakti Parashar",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Saravanan S",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Vinesh Kumar",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Nitin Kumar Mishra",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.S.Devaraju",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Ravi Verma",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Ramu Pasupathi Sugavaneshwar",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Anirban Bhowmick",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Chandan Kumar Behera",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.J.Manikandan",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.E.Nirmala",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Sharad Chandra Tripathi",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Sathish Kumar.L",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Yogesh Shukla",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Virendra Singh Kushwah",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Sumit Mittal",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Avirup Das",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Rudra Kalyan Nayak",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Rajdeep Singh Payal",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Praveen Lalwani",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.G.R.Hemalakshmi",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Vijendra Singh Bramhe",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Arun Kumar K",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.M.Manimaran",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Vijay Kumar Patidar",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.M.Maragatharajan",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Pushpdant Jain",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Rajit Nair",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.G.Prabu Kanna",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Rizwan Ur Rahman",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Subhash Chandra Patel",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Nella Anveshkumar",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Ankur Beohar",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Anand Motwani",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Ajay Kumar Bhurjee",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.D.Saravanan",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Gaurav Soni",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Kamlesh Chandravanshi",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Pradeep Kumar Mishra",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Soumya Sankar Ghosh",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Anita Yadav",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Rajeev Saxena",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Jyoti Badge",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Benevatho Jaison A",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Manisha Singh",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Pallabi Sarkar",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Suresh Dara",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Mayank Sharma",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Bhumika Choksi",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Ankush D Tharkar",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Prashant G K",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Rohit Sharma",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Pradeep Kumar Kayshap",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Sayed Mohammed Zeeshan",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Saurav Prasad",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Vikas Panthi",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Abha Trivedi",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Ashok Patel",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Satyam Ravi",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Shiv Manjaree Gopaliya",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Shweta Saxena",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Saurabh Bhargava",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Soumitra Nayak",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Trapti Sharma",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Anju Shukla",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Dipankar Sutradhar",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Ankit Pal",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.M.R.Thiyagu Priyadharsan",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Anil Kumar Yadav",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Ashok Kumar Baral",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.P.Narendra Babu",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Sheerin Kayenat",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Siddharth Singh Chouhan",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Dev Brat Gupta",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Harish Chandra",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Dheresh Soni",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Hariharan R",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Om Prakash Pahari",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Nilam Venkatakoteswararao",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.S.Aanjan Kumar",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Ankur Jain",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Ujjwal Kumar Mishra",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Udai Kumar",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Anil Kumar Shukla",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Rahul Kumar Chaturvedi",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Suchismita Patra",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Vijay Kumar Patel",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Pankaj Kumar",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Adarsh Patel",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Pratosh Kumar Pal",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Humaira Fatima",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Abhishek Shrivastava",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Prashant Kumar Pandey",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.C.P.Koushik",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Deep Chandra Upadhyay",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.J P Shritharanyaa",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Buvaneswari",
        "designation": "Senior Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Rajendra Mahanandia",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Abha Sharma",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Dondu Harish Babu",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.K.Sripriyan",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Dileep Kumar",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Arindam Sadhukhan",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Arindam Ghosh",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Ajay Kumar Phulre",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Harshlata Vishwakarma",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Swati Chauhan",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Amit Kumar Singh",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Jitendra Pratap Singh Mathur",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Suneet Joshi",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Ram Kumar",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Monica Sankat",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Sivabalan KR",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Shafiul Alom Ahmed",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Hemraj Shobharam Lamkuche",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Mohammad Sultan Alam",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.R.Sukumar",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Sangram Keshari Das",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Feeroz Babu",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Vivek Parashar",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Vinod Kumar Jatav",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Juhi Kesarwani",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Juhi Yasmeen",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Amrita Parashar",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Sonjoy Pan",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Saurabh Kumar Maurya",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Kiran Kumar Behera",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Santosh Kumar Bhal",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Sanjib Nayak",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Ramraj Dangi",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Saurabh Mishra",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Nancy Kumari",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Hemanta Kalita",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.P.Vayunandanakishore",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Md.Tauseef Qamar",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Shweta Singh",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Ranjitha Kumar",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Jagriti Gupta",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Adnan Abbasi",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Sanay Naha",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Krishna Chauhan",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Pooja Verma",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Vivek Sharma",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Shahab Saquib Sohail",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Monica P.",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Dip Mukherjee",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Ajay Sharma",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Rajneesh Kumar Patel",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Abhinav Kumar",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Pijush Kanti Mondal",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Jyoti Chauhan",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Priyanka Roy",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Raghavendra Mishra",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Abhishek Kumar Shukla",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Shilpa Suman",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Narottam Das Patel",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Mohd Rafi Lone",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Badla Pawan Babu",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Abhishek Raj",
        "designation": "Assitant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Irfan Alam",
        "designation": "Assistant Professor"
    },
    {
        "_id": "00",
        "name": "Dr.Nilesh Kunhare",
        "designation": "Assistant Professor"
    },
])

