// import fs from "fs";
import Fuse from "fuse.js";

// interface Faculty {
//     "_id": string;
//     "name": string;
//     "designation":string;
// }

const facultyData = Object.freeze(
    [
        {
            "_id": "FAC-001",
            "name": "Dr.Sheetal Sharma",
            "designation": "Professor"
        },
        {
            "_id": "FAC-002",
            "name": "Dr.Debashis Adhikari",
            "designation": "Professor"
        },
        {
            "_id": "FAC-003",
            "name": "Dr.S.Poonkuntran",
            "designation": "Professor"
        },
        {
            "_id": "FAC-004",
            "name": "Dr.R.Shriram",
            "designation": "Professor"
        },
        {
            "_id": "FAC-005",
            "name": "Dr Hemant Kumar Nashine",
            "designation": "Professor"
        },
        {
            "_id": "FAC-006",
            "name": "Dr.M.K.Jayanthi",
            "designation": "Professor"
        },
        {
            "_id": "FAC-007",
            "name": "Dr.Zaheer Kareem Ansari",
            "designation": "Professor"
        },
        {
            "_id": "FAC-008",
            "name": "Dr.Pushpinder Singh Patheja",
            "designation": "Senior Associate Professor"
        },
        {
            "_id": "FAC-009",
            "name": "Dr.S Balaguru",
            "designation": "Senior Associate Professor"
        },
        {
            "_id": "FAC-010",
            "name": "Dr.Lakshmi.D",
            "designation": "Senior Associate Professor"
        },
        {
            "_id": "FAC-011",
            "name": "Dr.Pon Harshavardhanan",
            "designation": "Senior Associate Professor"
        },
        {
            "_id": "FAC-012",
            "name": "Dr.I.Jasmine Selvakumari Jeya",
            "designation": "Senior Associate Professor"
        },
        {
            "_id": "FAC-013",
            "name": "Dr.Sasmita Padhy",
            "designation": "Senior Associate Professor"
        },
        {
            "_id": "FAC-014",
            "name": "Dr.Santosh Kumar Sahoo",
            "designation": "Senior Associate Professor"
        },
        {
            "_id": "FAC-015",
            "name": "Dr Komarasamy G",
            "designation": "Senior Associate Professor"
        },
        {
            "_id": "FAC-016",
            "name": "Dr.S.Ananthakumaran",
            "designation": "Senior Associate Professor"
        },
        {
            "_id": "FAC-017",
            "name": "Dr.J.Subash Chandra Bose",
            "designation": "Senior Associate Professor"
        },
        {
            "_id": "FAC-018",
            "name": "Dr.Venkat Padhy",
            "designation": "Senior Associate Professor"
        },
        {
            "_id": "FAC-019",
            "name": "Dr.N.Kannaiya Raja",
            "designation": "Senior Associate Professor"
        },
        {
            "_id": "FAC-020",
            "name": "Dr.Manisha Jain",
            "designation": "Associate Professor"
        },
        {
            "_id": "FAC-021",
            "name": "Dr.Vinod Bhatt",
            "designation": "Associate Professor"
        },
        {
            "_id": "FAC-022",
            "name": "Dr.Mamta Agrawal",
            "designation": "Associate Professor"
        },
        {
            "_id": "FAC-023",
            "name": "Dr.Navneet Kumar Verma",
            "designation": "Associate Professor"
        },
        {
            "_id": "FAC-024",
            "name": "Dr.M.Xavier Suresh",
            "designation": "Associate Professor"
        },
        {
            "_id": "FAC-025",
            "name": "Dr.Mahendran B",
            "designation": "Associate Professor"
        },
        {
            "_id": "FAC-026",
            "name": "Dr.Prasad Begde",
            "designation": "Associate Professor"
        },
        {
            "_id": "FAC-027",
            "name": "Dr.S.Periyanayagi",
            "designation": "Associate Professor"
        },
        {
            "_id": "FAC-028",
            "name": "Dr.Reena Jain",
            "designation": "Associate Professor"
        },
        {
            "_id": "FAC-029",
            "name": "Dr.Paras Jain",
            "designation": "Associate Professor"
        },
        {
            "_id": "FAC-030",
            "name": "Dr.Nilamadhab Mishra",
            "designation": "Associate Professor"
        },
        {
            "_id": "FAC-031",
            "name": "Dr.A.Sirajudeen",
            "designation": "Associate Professor"
        },
        {
            "_id": "FAC-032",
            "name": "Dr.G.Vishnuvarthanan",
            "designation": "Associate Professor"
        },
        {
            "_id": "FAC-033",
            "name": "Dr.Anjali Mathur",
            "designation": "Associate Professor"
        },
        {
            "_id": "FAC-034",
            "name": "Dr.Abdul Rehman",
            "designation": "Associate Professor"
        },
        {
            "_id": "FAC-035",
            "name": "Dr.M.Suresh",
            "designation": "Associate Professor"
        },
        {
            "_id": "FAC-036",
            "name": "Dr.Sandip Mal",
            "designation": "Associate Professor"
        },
        {
            "_id": "FAC-037",
            "name": "Dr.Gunjan Ansari",
            "designation": "Associate Professor"
        },
        {
            "_id": "FAC-038",
            "name": "Dr.Pavan Kumar",
            "designation": "Associate Professor"
        },
        {
            "_id": "FAC-039",
            "name": "Dr.Siddhartha Maiti",
            "designation": "Associate Professor"
        },
        {
            "_id": "FAC-040",
            "name": "Dr.AVR Mayuri",
            "designation": "Associate Professor"
        },
        {
            "_id": "FAC-041",
            "name": "Dr.Preetam Suman",
            "designation": "Associate Professor"
        },
        {
            "_id": "FAC-042",
            "name": "Dr.Akshara Makrariya",
            "designation": "Associate Professor"
        },
        {
            "_id": "FAC-043",
            "name": "Dr.Hariharasitaraman.S",
            "designation": "Associate Professor"
        },
        {
            "_id": "FAC-044",
            "name": "Dr.Shweta Mukherjee",
            "designation": "Associate Professor"
        },
        {
            "_id": "FAC-045",
            "name": "Dr.Kannan Shanmugam",
            "designation": "Associate Professor"
        },
        {
            "_id": "FAC-046",
            "name": "Dr.Neha Choubey",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-047",
            "name": "Dr.Baseera A",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-048",
            "name": "Dr.Manoj Acharya",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-049",
            "name": "Dr.Abhay Vidyarthi",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-050",
            "name": "Dr.Anant Kant Shukla",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-051",
            "name": "Dr Muneeswaran V",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-052",
            "name": "Dr.Murugeswari.K",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-053",
            "name": "Dr.Swagat Samantaray",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-054",
            "name": "Dr.Sivasankaran",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-055",
            "name": "Dr.Balaji A",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-056",
            "name": "Dr.Kumar Abhishek",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-057",
            "name": "Dr.Bhakti Parashar",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-058",
            "name": "Dr.Saravanan S",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-059",
            "name": "Dr.Vinesh Kumar",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-060",
            "name": "Dr.Nitin Kumar Mishra",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-061",
            "name": "Dr.S.Devaraju",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-062",
            "name": "Dr.Ravi Verma",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-063",
            "name": "Dr.Ramu Pasupathi Sugavaneshwar",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-064",
            "name": "Dr.Anirban Bhowmick",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-065",
            "name": "Dr.Chandan Kumar Behera",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-066",
            "name": "Dr.J.Manikandan",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-067",
            "name": "Dr.E.Nirmala",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-068",
            "name": "Dr.Sharad Chandra Tripathi",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-069",
            "name": "Dr.Sathish Kumar.L",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-070",
            "name": "Dr.Yogesh Shukla",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-071",
            "name": "Dr.Virendra Singh Kushwah",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-072",
            "name": "Dr.Sumit Mittal",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-073",
            "name": "Dr.Avirup Das",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-074",
            "name": "Dr.Rudra Kalyan Nayak",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-075",
            "name": "Dr.Rajdeep Singh Payal",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-076",
            "name": "Dr.Praveen Lalwani",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-077",
            "name": "Dr.G.R.Hemalakshmi",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-078",
            "name": "Dr.Vijendra Singh Bramhe",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-079",
            "name": "Dr.Arun Kumar K",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-080",
            "name": "Dr.M.Manimaran",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-081",
            "name": "Dr.Vijay Kumar Patidar",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-082",
            "name": "Dr.M.Maragatharajan",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-083",
            "name": "Dr.Pushpdant Jain",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-084",
            "name": "Dr.Rajit Nair",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-085",
            "name": "Dr.G.Prabu Kanna",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-086",
            "name": "Dr.Rizwan Ur Rahman",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-087",
            "name": "Dr.Subhash Chandra Patel",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-088",
            "name": "Dr.Nella Anveshkumar",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-089",
            "name": "Dr.Ankur Beohar",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-090",
            "name": "Dr.Anand Motwani",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-091",
            "name": "Dr.Ajay Kumar Bhurjee",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-092",
            "name": "Dr.D.Saravanan",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-093",
            "name": "Dr.Gaurav Soni",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-094",
            "name": "Dr.Kamlesh Chandravanshi",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-095",
            "name": "Dr.Pradeep Kumar Mishra",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-096",
            "name": "Dr.Soumya Sankar Ghosh",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-097",
            "name": "Dr.Anita Yadav",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-098",
            "name": "Dr.Rajeev Saxena",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-099",
            "name": "Dr.Jyoti Badge",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-100",
            "name": "Dr.Benevatho Jaison A",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-101",
            "name": "Dr.Manisha Singh",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-102",
            "name": "Dr.Pallabi Sarkar",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-103",
            "name": "Dr.Suresh Dara",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-104",
            "name": "Dr.Mayank Sharma",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-105",
            "name": "Dr.Bhumika Choksi",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-106",
            "name": "Dr.Ankush D Tharkar",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-107",
            "name": "Dr.Prashant G K",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-108",
            "name": "Dr.Rohit Sharma",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-109",
            "name": "Dr.Pradeep Kumar Kayshap",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-110",
            "name": "Dr.Sayed Mohammed Zeeshan",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-111",
            "name": "Dr.Saurav Prasad",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-112",
            "name": "Dr.Vikas Panthi",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-113",
            "name": "Dr.Abha Trivedi",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-114",
            "name": "Dr.Ashok Patel",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-115",
            "name": "Dr.Satyam Ravi",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-116",
            "name": "Dr.Shiv Manjaree Gopaliya",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-117",
            "name": "Dr.Shweta Saxena",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-118",
            "name": "Dr.Saurabh Bhargava",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-119",
            "name": "Dr.Soumitra Nayak",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-120",
            "name": "Dr.Trapti Sharma",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-121",
            "name": "Dr.Anju Shukla",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-122",
            "name": "Dr.Dipankar Sutradhar",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-123",
            "name": "Dr.Ankit Pal",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-124",
            "name": "Dr.M.R.Thiyagu Priyadharsan",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-125",
            "name": "Dr.Anil Kumar Yadav",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-126",
            "name": "Dr.Ashok Kumar Baral",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-127",
            "name": "Dr.P.Narendra Babu",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-128",
            "name": "Dr.Sheerin Kayenat",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-129",
            "name": "Dr.Siddharth Singh Chouhan",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-130",
            "name": "Dr.Dev Brat Gupta",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-131",
            "name": "Dr.Harish Chandra",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-132",
            "name": "Dr.Dheresh Soni",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-133",
            "name": "Dr.Hariharan R",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-134",
            "name": "Dr.Om Prakash Pahari",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-135",
            "name": "Dr.Nilam Venkatakoteswararao",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-136",
            "name": "Dr.S.Aanjan Kumar",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-137",
            "name": "Dr.Ankur Jain",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-138",
            "name": "Dr.Ujjwal Kumar Mishra",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-139",
            "name": "Dr.Udai Kumar",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-140",
            "name": "Dr.Anil Kumar Shukla",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-141",
            "name": "Dr.Rahul Kumar Chaturvedi",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-142",
            "name": "Dr.Suchismita Patra",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-143",
            "name": "Dr.Vijay Kumar Patel",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-144",
            "name": "Dr.Pankaj Kumar",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-145",
            "name": "Dr.Adarsh Patel",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-146",
            "name": "Dr.Pratosh Kumar Pal",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-147",
            "name": "Dr.Humaira Fatima",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-148",
            "name": "Dr.Abhishek Shrivastava",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-149",
            "name": "Dr.Prashant Kumar Pandey",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-150",
            "name": "Dr.C.P.Koushik",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-151",
            "name": "Dr.Deep Chandra Upadhyay",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-152",
            "name": "Dr.J P Shritharanyaa",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-153",
            "name": "Dr.Buvaneswari",
            "designation": "Senior Assistant Professor"
        },
        {
            "_id": "FAC-154",
            "name": "Dr.Rajendra Mahanandia",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-155",
            "name": "Dr.Abha Sharma",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-156",
            "name": "Dr.Dondu Harish Babu",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-157",
            "name": "Dr.K.Sripriyan",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-158",
            "name": "Dr.Dileep Kumar",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-159",
            "name": "Dr.Arindam Sadhukhan",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-160",
            "name": "Dr.Arindam Ghosh",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-161",
            "name": "Dr.Ajay Kumar Phulre",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-162",
            "name": "Dr.Harshlata Vishwakarma",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-163",
            "name": "Dr.Swati Chauhan",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-164",
            "name": "Dr.Amit Kumar Singh",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-165",
            "name": "Dr.Jitendra Pratap Singh Mathur",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-166",
            "name": "Dr.Suneet Joshi",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-167",
            "name": "Dr.Ram Kumar",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-168",
            "name": "Dr.Monica Sankat",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-169",
            "name": "Dr.Sivabalan KR",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-170",
            "name": "Dr.Shafiul Alom Ahmed",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-171",
            "name": "Dr.Hemraj Shobharam Lamkuche",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-172",
            "name": "Dr.Mohammad Sultan Alam",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-173",
            "name": "Dr.R.Sukumar",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-174",
            "name": "Dr.Sangram Keshari Das",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-175",
            "name": "Dr.Feeroz Babu",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-176",
            "name": "Dr.Vivek Parashar",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-177",
            "name": "Dr.Vinod Kumar Jatav",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-178",
            "name": "Dr.Juhi Kesarwani",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-179",
            "name": "Dr.Juhi Yasmeen",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-180",
            "name": "Dr.Amrita Parashar",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-181",
            "name": "Dr.Sonjoy Pan",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-182",
            "name": "Dr.Saurabh Kumar Maurya",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-183",
            "name": "Dr.Kiran Kumar Behera",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-184",
            "name": "Dr.Santosh Kumar Bhal",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-185",
            "name": "Dr.Sanjib Nayak",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-186",
            "name": "Dr.Ramraj Dangi",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-187",
            "name": "Dr.Saurabh Mishra",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-188",
            "name": "Dr.Nancy Kumari",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-189",
            "name": "Dr.Hemanta Kalita",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-190",
            "name": "Dr.P.Vayunandanakishore",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-191",
            "name": "Dr.Md.Tauseef Qamar",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-192",
            "name": "Dr.Shweta Singh",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-193",
            "name": "Dr.Ranjitha Kumar",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-194",
            "name": "Dr.Jagriti Gupta",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-195",
            "name": "Dr.Adnan Abbasi",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-196",
            "name": "Dr.Sanay Naha",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-197",
            "name": "Dr.Krishna Chauhan",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-198",
            "name": "Dr.Pooja Verma",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-199",
            "name": "Dr.Vivek Sharma",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-200",
            "name": "Dr.Shahab Saquib Sohail",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-201",
            "name": "Dr.Monica P.",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-202",
            "name": "Dr.Dip Mukherjee",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-203",
            "name": "Dr.Ajay Sharma",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-204",
            "name": "Dr.Rajneesh Kumar Patel",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-205",
            "name": "Dr.Abhinav Kumar",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-206",
            "name": "Dr.Pijush Kanti Mondal",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-207",
            "name": "Dr.Jyoti Chauhan",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-208",
            "name": "Dr.Priyanka Roy",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-209",
            "name": "Dr.Raghavendra Mishra",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-210",
            "name": "Dr.Abhishek Kumar Shukla",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-211",
            "name": "Dr.Shilpa Suman",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-212",
            "name": "Dr.Narottam Das Patel",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-213",
            "name": "Dr.Mohd Rafi Lone",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-214",
            "name": "Dr.Badla Pawan Babu",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-215",
            "name": "Dr.Abhishek Raj",
            "designation": "Assitant Professor"
        },
        {
            "_id": "FAC-216",
            "name": "Dr.Irfan Alam",
            "designation": "Assistant Professor"
        },
        {
            "_id": "FAC-217",
            "name": "Dr.Nilesh Kunhare",
            "designation": "Assistant Professor"
        }
    ]
)

// Configure Fuse.js for fuzzy searching
const fuse = new Fuse(facultyData, {
  keys: ["name"], // Search by name and designation
  threshold: 0.3, // Adjust sensitivity (lower = stricter matching)
});


export function searchFaculty(query:string) {
  if (!query.trim()) return []; // Return empty array if query is empty

  const results = fuse.search(query);
  return results.map(result => result.item.name); // Extract matching items
}

export function getFacultyByName(name:string) {
  return facultyData.find(faculty => faculty.name === name);
}
// Example usage
// const userQuery = "Sharma"; // Get user input from CLI or default to "Sharma"
// const matches = searchFaculty(userQuery);

// console.log("🔍 Search Results:", matches);





// code below was used to generate unique faculty codes

// // Replace "0000" with an incremental ID
// facultyData.forEach((faculty, index) => {
//   faculty._id = `FAC-${String(index + 1).padStart(3, "0")}`;  // FAC-001, FAC-002, ...
// });

// // Save updated data to a file
// fs.writeFileSync("updated_faculty.json", JSON.stringify(facultyData, null, 4));

// console.log("✅ Faculty data updated with incremental IDs!");

