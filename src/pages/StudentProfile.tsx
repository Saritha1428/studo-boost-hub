import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Edit, Mail, Phone, MapPin, Calendar, BookOpen } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const StudentProfile = () => {
  const studentInfo = {
    name: "Alex Johnson",
    rollNo: "CS21B1001",
    email: "alex.johnson@university.edu",
    phone: "+1 (555) 123-4567",
    department: "Computer Science",
    year: "3rd Year",
    address: "123 University Ave, College Town",
    joinDate: "August 2021",
    avatar: "/placeholder.svg"
  };

  const attendanceHistory = [
    { month: 'Aug', percentage: 92 },
    { month: 'Sep', percentage: 88 },
    { month: 'Oct', percentage: 85 },
    { month: 'Nov', percentage: 78 },
    { month: 'Dec', percentage: 82 },
    { month: 'Jan', percentage: 75 },
  ];

  const marksHistory = [
    { subject: "DBMS", mid1: 85, mid2: 88, internal: 92, external: 78 },
    { subject: "DSA", mid1: 78, mid2: 82, internal: 85, external: 80 },
    { subject: "OS", mid1: 72, mid2: 75, internal: 78, external: 72 },
    { subject: "CN", mid1: 88, mid2: 85, internal: 90, external: 85 },
    { subject: "Web Dev", mid1: 95, mid2: 92, internal: 98, external: 88 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Student Profile</h1>
          <p className="text-muted-foreground">Manage your personal and academic information</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Profile Card */}
          <Card className="shadow-card lg:col-span-1">
            <CardHeader className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src={studentInfo.avatar} alt={studentInfo.name} />
                <AvatarFallback className="text-2xl bg-gradient-primary text-primary-foreground">
                  {studentInfo.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl">{studentInfo.name}</CardTitle>
              <div className="text-muted-foreground">{studentInfo.rollNo}</div>
              <Badge variant="secondary" className="mt-2">{studentInfo.department}</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{studentInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{studentInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{studentInfo.address}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>Joined {studentInfo.joinDate}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                <span>{studentInfo.year}</span>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card className="shadow-card lg:col-span-2">
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label htmlFor="photo">Profile Photo</Label>
                <div className="flex items-center gap-4">
                  <Input id="photo" type="file" accept="image/*" />
                  <Button variant="outline">Upload</Button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="parentphone">Parent Phone Number</Label>
                  <Input id="parentphone" placeholder="+1 (555) 987-6543" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="parentemail">Parent Email ID</Label>
                  <Input id="parentemail" type="email" placeholder="parent@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="eapcetrank">EAPCET Rank</Label>
                  <Input id="eapcetrank" placeholder="12345" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="caste">Caste</Label>
                  <Input id="caste" placeholder="General/OBC/SC/ST" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="income">Family Income (Annual)</Label>
                  <Input id="income" placeholder="₹5,00,000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fatherwork">Father's Occupation</Label>
                  <Input id="fatherwork" placeholder="Software Engineer" />
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="gradient">Save Changes</Button>
                <Button variant="outline">Reset</Button>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default StudentProfile;