import Navigation from "@/components/Navigation";
import RiskBadge from "@/components/RiskBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, TrendingDown, Calendar, BookOpen, DollarSign, Brain } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const RiskPrediction = () => {
  const riskData = {
    level: "medium" as const,
    percentage: 65,
    factors: [
      { factor: "Attendance", impact: 35, trend: "declining", value: "78%" },
      { factor: "Academic Performance", impact: 25, trend: "stable", value: "7.8 CGPA" },
      { factor: "Assignment Submission", impact: 20, trend: "declining", value: "80%" },
      { factor: "Fee Payment", impact: 15, trend: "delayed", value: "2 delays" },
      { factor: "Engagement", impact: 5, trend: "low", value: "Low participation" }
    ]
  };

  const attendanceTrend = [
    { month: 'Aug', attendance: 92, target: 75 },
    { month: 'Sep', attendance: 88, target: 75 },
    { month: 'Oct', attendance: 85, target: 75 },
    { month: 'Nov', attendance: 78, target: 75 },
    { month: 'Dec', attendance: 82, target: 75 },
    { month: 'Jan', attendance: 75, target: 75 },
  ];

  const performanceTrend = [
    { exam: 'Mid-1', score: 82 },
    { exam: 'Mid-2', score: 78 },
    { exam: 'Assignment 1', score: 85 },
    { exam: 'Assignment 2', score: 72 },
    { exam: 'Quiz 1', score: 68 },
    { exam: 'Quiz 2', score: 75 },
  ];

  const riskFactorsRadar = [
    { factor: 'Attendance', score: 65 },
    { factor: 'Performance', score: 78 },
    { factor: 'Engagement', score: 40 },
    { factor: 'Punctuality', score: 70 },
    { factor: 'Submissions', score: 60 },
  ];

  const recommendations = [
    {
      priority: "high",
      title: "Improve Attendance in Critical Subjects",
      description: "Focus on OS and DSA classes where attendance is below 70%",
      action: "Attend next 5 classes in each subject",
      impact: "Reduce risk by 15%"
    },
    {
      priority: "medium",
      title: "Seek Academic Support",
      description: "Recent test scores show declining performance",
      action: "Schedule tutoring sessions or join study groups",
      impact: "Reduce risk by 10%"
    },
    {
      priority: "medium",
      title: "Improve Assignment Submission Rate",
      description: "Missing assignments contribute to risk score",
      action: "Set reminders and submit pending assignments",
      impact: "Reduce risk by 8%"
    },
    {
      priority: "low",
      title: "Regular Fee Payment",
      description: "Delayed payments affect overall student status",
      action: "Set up automatic payment reminders",
      impact: "Reduce risk by 5%"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "warning";
      case "low": return "secondary";
      default: return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Risk Prediction Analysis</h1>
          <p className="text-muted-foreground">AI-powered insights into your academic risk factors</p>
        </div>

        {/* Risk Overview */}
        <Card className="shadow-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              AI Risk Assessment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="text-center">
                  <RiskBadge level={riskData.level} className="mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{riskData.percentage}%</div>
                  <div className="text-muted-foreground">Dropout Risk Probability</div>
                </div>
                <Progress value={riskData.percentage} className="h-4" />
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold">Key Risk Factors:</h4>
                {riskData.factors.map((factor, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg border">
                    <div>
                      <div className="font-medium text-sm">{factor.factor}</div>
                      <div className="text-xs text-muted-foreground">{factor.value}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold">{factor.impact}%</div>
                      <div className={`text-xs ${
                        factor.trend === 'declining' ? 'text-destructive' : 
                        factor.trend === 'stable' ? 'text-success' : 'text-warning'
                      }`}>
                        {factor.trend}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alert */}
        <Alert className="mb-6 border-warning/20 bg-warning/5">
          <AlertTriangle className="h-4 w-4 text-warning" />
          <AlertDescription className="text-warning-foreground">
            <strong>Action Required:</strong> Your risk level has increased by 10% this month. 
            Following the recommendations below can help reduce your dropout risk significantly.
          </AlertDescription>
        </Alert>

        {/* Trends Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Attendance Trend */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Attendance Trend Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={attendanceTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[60, 100]} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="attendance" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    name="Attendance"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="target" 
                    stroke="hsl(var(--destructive))" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="Minimum Required"
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-4 p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                <div className="text-sm font-medium text-destructive">Critical Insight:</div>
                <div className="text-sm text-muted-foreground">
                  Attendance dropped below safe threshold in January. Consistent decline since August.
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Trend */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Academic Performance Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={performanceTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="exam" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar 
                    dataKey="score" 
                    fill="hsl(var(--primary))"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 p-3 rounded-lg bg-warning/5 border border-warning/20">
                <div className="text-sm font-medium text-warning">Performance Alert:</div>
                <div className="text-sm text-muted-foreground">
                  Recent quiz scores are below your average. Consider additional study support.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Risk Factors Radar */}
        <Card className="shadow-card mb-8">
          <CardHeader>
            <CardTitle>Multi-Factor Risk Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={riskFactorsRadar}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="factor" />
                  <PolarRadiusAxis angle={45} domain={[0, 100]} />
                  <Radar
                    name="Current Score"
                    dataKey="score"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
              <div className="space-y-4">
                <h4 className="font-semibold">Factor Explanations:</h4>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg border">
                    <div className="font-medium text-sm">Attendance (65/100)</div>
                    <div className="text-xs text-muted-foreground">
                      Below recommended level in 2 subjects
                    </div>
                  </div>
                  <div className="p-3 rounded-lg border">
                    <div className="font-medium text-sm">Performance (78/100)</div>
                    <div className="text-xs text-muted-foreground">
                      Good overall but showing decline in recent assessments
                    </div>
                  </div>
                  <div className="p-3 rounded-lg border">
                    <div className="font-medium text-sm">Engagement (40/100)</div>
                    <div className="text-xs text-muted-foreground">
                      Low participation in class discussions and activities
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Personalized Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="p-4 rounded-lg border">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${
                        rec.priority === 'high' ? 'bg-destructive' :
                        rec.priority === 'medium' ? 'bg-warning' : 'bg-muted-foreground'
                      }`} />
                      <h4 className="font-semibold">{rec.title}</h4>
                    </div>
                    <div className="text-sm font-medium text-success">{rec.impact}</div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{rec.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <strong>Action:</strong> {rec.action}
                    </div>
                    <Button variant="outline" size="sm">
                      Take Action
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-lg bg-success/5 border border-success/20">
              <div className="text-center">
                <div className="font-semibold text-success mb-2">Potential Impact</div>
                <div className="text-sm text-muted-foreground">
                  Following all recommendations could reduce your dropout risk by up to 38%, 
                  bringing you to the "Low Risk" category.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RiskPrediction;