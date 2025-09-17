import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard, 
  Download, 
  Calendar, 
  DollarSign,
  CheckCircle,
  XCircle,
  Clock
} from "lucide-react";

const FeesStructure = () => {
  const feeStructure = {
    totalFees: 85000,
    paidAmount: 55000,
    pendingAmount: 30000,
    semester: "6th Semester",
    academicYear: "2024-25"
  };

  const feeBreakdown = [
    { category: "Tuition Fees", amount: 60000, paid: 40000, status: "Partial" },
    { category: "Lab Fees", amount: 8000, paid: 8000, status: "Paid" },
    { category: "Library Fees", amount: 3000, paid: 3000, status: "Paid" },
    { category: "Examination Fees", amount: 5000, paid: 4000, status: "Partial" },
    { category: "Development Fees", amount: 7000, paid: 0, status: "Pending" },
    { category: "Miscellaneous", amount: 2000, paid: 0, status: "Pending" }
  ];

  const paymentHistory = [
    { date: "15 Jan 2025", amount: 25000, method: "Online", status: "Success", receipt: "RCP001" },
    { date: "10 Nov 2024", amount: 20000, method: "Bank Transfer", status: "Success", receipt: "RCP002" },
    { date: "05 Sep 2024", amount: 10000, method: "Online", status: "Success", receipt: "RCP003" }
  ];

  const upcomingDueDates = [
    { description: "Semester Fees", amount: 25000, dueDate: "28 Feb 2025", status: "upcoming" },
    { description: "Development Fees", amount: 5000, dueDate: "15 Mar 2025", status: "upcoming" }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Paid":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "Pending":
        return <XCircle className="h-4 w-4 text-destructive" />;
      case "Partial":
        return <Clock className="h-4 w-4 text-warning" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Paid":
        return <Badge variant="default" className="bg-success text-success-foreground">Paid</Badge>;
      case "Pending":
        return <Badge variant="destructive">Pending</Badge>;
      case "Partial":
        return <Badge variant="secondary">Partial</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Fees Structure</h1>
          <p className="text-muted-foreground">
            Manage your academic fees and payment history
          </p>
        </div>

        {/* Fee Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <DollarSign className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">₹{feeStructure.totalFees.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Total Fees</div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-8 w-8 mx-auto mb-2 text-success" />
              <div className="text-2xl font-bold text-success">₹{feeStructure.paidAmount.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Paid Amount</div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <XCircle className="h-8 w-8 mx-auto mb-2 text-destructive" />
              <div className="text-2xl font-bold text-destructive">₹{feeStructure.pendingAmount.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Pending Amount</div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 mx-auto mb-2 text-accent" />
              <div className="text-lg font-bold">{feeStructure.semester}</div>
              <div className="text-sm text-muted-foreground">{feeStructure.academicYear}</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Fee Breakdown */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Fee Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {feeBreakdown.map((fee, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(fee.status)}
                      <div>
                        <div className="font-medium">{fee.category}</div>
                        <div className="text-sm text-muted-foreground">
                          Paid: ₹{fee.paid.toLocaleString()} / ₹{fee.amount.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    {getStatusBadge(fee.status)}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Due Dates */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-warning" />
                Upcoming Due Dates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingDueDates.map((due, index) => (
                  <div key={index} className="p-4 rounded-lg bg-warning/5 border border-warning/20">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium">{due.description}</div>
                      <div className="text-lg font-bold text-warning">₹{due.amount.toLocaleString()}</div>
                    </div>
                    <div className="text-sm text-muted-foreground">Due: {due.dueDate}</div>
                  </div>
                ))}
                <Button variant="gradient" className="w-full">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Pay Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment History */}
        <Card className="shadow-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Payment History</CardTitle>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download Statement
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Date</th>
                    <th className="text-left p-2">Amount</th>
                    <th className="text-left p-2">Method</th>
                    <th className="text-left p-2">Status</th>
                    <th className="text-left p-2">Receipt</th>
                    <th className="text-left p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentHistory.map((payment, index) => (
                    <tr key={index} className="border-b hover:bg-muted/20">
                      <td className="p-3">{payment.date}</td>
                      <td className="p-3 font-medium">₹{payment.amount.toLocaleString()}</td>
                      <td className="p-3">{payment.method}</td>
                      <td className="p-3">
                        <Badge variant="default" className="bg-success text-success-foreground">
                          {payment.status}
                        </Badge>
                      </td>
                      <td className="p-3 font-mono text-sm">{payment.receipt}</td>
                      <td className="p-3">
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeesStructure;