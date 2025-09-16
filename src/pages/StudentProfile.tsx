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

          {/* Personal Information Form */}
          <Card className="shadow-card lg:col-span-2">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" value={studentInfo.name} disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rollno">Roll Number</Label>
                  <Input id="rollno" value={studentInfo.rollNo} disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" value={studentInfo.email} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" value={studentInfo.phone} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input id="department" value={studentInfo.department} disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Academic Year</Label>
                  <Input id="year" value={studentInfo.year} disabled />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" value={studentInfo.address} />
              </div>
              <div className="flex gap-2">
                <Button variant="gradient">Save Changes</Button>
                <Button variant="outline">Reset</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Attendance History */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Attendance Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={attendanceHistory}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[60, 100]} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="percentage" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Performance Overview */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Academic Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {marksHistory.map((subject, index) => {
                  const average = Math.round((subject.mid1 + subject.mid2 + subject.internal + subject.external) / 4);
                  return (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                      <div>
                        <h4 className="font-medium">{subject.subject}</h4>
                        <div className="text-sm text-muted-foreground">
                          Mid: {subject.mid1}, {subject.mid2} | Internal: {subject.internal} | External: {subject.external}
                        </div>
                      </div>
                      <Badge variant={average >= 80 ? "default" : average >= 60 ? "secondary" : "destructive"}>
                        {average}%
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Academic Summary */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Academic Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-success/5 border border-success/20">
                <div className="text-2xl font-bold text-success">7.8</div>
                <div className="text-sm text-muted-foreground">Current CGPA</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="text-2xl font-bold text-primary">78%</div>
                <div className="text-sm text-muted-foreground">Overall Attendance</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-accent/5 border border-accent/20">
                <div className="text-2xl font-bold text-accent">12</div>
                <div className="text-sm text-muted-foreground">Badges Earned</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentProfile;