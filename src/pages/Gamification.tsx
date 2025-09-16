import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Award, Star, Target, Flame, Users } from "lucide-react";

const Gamification = () => {
  const playerStats = {
    currentXP: 2450,
    level: 3,
    nextLevelXP: 3000,
    streak: 7,
    totalBadges: 12,
    rank: 15
  };

  const badges = [
    {
      id: 1,
      name: "Attendance Star",
      description: "Maintain 90%+ attendance for a week",
      icon: "⭐",
      earned: true,
      earnedDate: "2024-01-15",
      xp: 100
    },
    {
      id: 2,
      name: "Assignment Hero",
      description: "Submit 5 assignments on time",
      icon: "📝",
      earned: true,
      earnedDate: "2024-01-20",
      xp: 150
    },
    {
      id: 3,
      name: "Test Master",
      description: "Score 85%+ in 3 consecutive tests",
      icon: "🎯",
      earned: false,
      progress: 66,
      xp: 200
    },
    {
      id: 4,
      name: "Study Streak",
      description: "Login daily for 7 days",
      icon: "🔥",
      earned: true,
      earnedDate: "2024-01-10",
      xp: 100
    },
    {
      id: 5,
      name: "Knowledge Seeker",
      description: "Complete 10 learning modules",
      icon: "📚",
      earned: false,
      progress: 80,
      xp: 250
    },
    {
      id: 6,
      name: "Perfect Score",
      description: "Score 100% in any test",
      icon: "💯",
      earned: false,
      progress: 0,
      xp: 300
    },
    {
      id: 7,
      name: "Team Player",
      description: "Participate in 3 group projects",
      icon: "👥",
      earned: true,
      earnedDate: "2024-01-25",
      xp: 175
    },
    {
      id: 8,
      name: "Early Bird",
      description: "Attend first class for 5 days",
      icon: "🌅",
      earned: false,
      progress: 40,
      xp: 120
    }
  ];

  const leaderboard = [
    { rank: 1, name: "Sarah Chen", xp: 4250, level: 4 },
    { rank: 2, name: "Mike Rodriguez", xp: 3890, level: 3 },
    { rank: 3, name: "Emma Thompson", xp: 3654, level: 3 },
    { rank: 4, name: "David Kim", xp: 3200, level: 3 },
    { rank: 5, name: "Lisa Wang", xp: 2980, level: 3 },
    { rank: 15, name: "Alex Johnson (You)", xp: 2450, level: 3 }
  ];

  const achievements = [
    {
      title: "Level Up!",
      description: "You reached Level 3",
      date: "2 days ago",
      xp: 500
    },
    {
      title: "Badge Unlocked",
      description: "Earned Team Player badge",
      date: "1 week ago",
      xp: 175
    },
    {
      title: "Streak Milestone",
      description: "7-day login streak achieved",
      date: "2 weeks ago",
      xp: 100
    }
  ];

  const earnedBadges = badges.filter(badge => badge.earned);
  const lockedBadges = badges.filter(badge => !badge.earned);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Gamification Hub</h1>
          <p className="text-muted-foreground">Track your progress, earn badges, and climb the leaderboard</p>
        </div>

        {/* Player Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card bg-gradient-primary text-primary-foreground">
            <CardContent className="p-6 text-center">
              <Trophy className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">Level {playerStats.level}</div>
              <div className="text-sm opacity-90">{playerStats.currentXP} XP</div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <Flame className="h-8 w-8 mx-auto mb-2 text-warning" />
              <div className="text-2xl font-bold">{playerStats.streak}</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 mx-auto mb-2 text-accent" />
              <div className="text-2xl font-bold">{playerStats.totalBadges}</div>
              <div className="text-sm text-muted-foreground">Badges Earned</div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-success" />
              <div className="text-2xl font-bold">#{playerStats.rank}</div>
              <div className="text-sm text-muted-foreground">Class Rank</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Level Progress */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Level Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">Level {playerStats.level}</div>
                  <div className="text-sm text-muted-foreground">
                    {playerStats.currentXP} / {playerStats.nextLevelXP} XP
                  </div>
                </div>
                <Progress 
                  value={(playerStats.currentXP / playerStats.nextLevelXP) * 100} 
                  className="h-4"
                />
                <div className="text-center text-sm text-muted-foreground">
                  {playerStats.nextLevelXP - playerStats.currentXP} XP to Level {playerStats.level + 1}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Achievements */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <Trophy className="h-4 w-4 text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{achievement.title}</div>
                      <div className="text-xs text-muted-foreground mb-1">
                        {achievement.description}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{achievement.date}</span>
                        <Badge variant="secondary" className="text-xs">+{achievement.xp} XP</Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Leaderboard */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Class Leaderboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {leaderboard.map((player, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center justify-between p-2 rounded-lg ${
                      player.name.includes('You') ? 'bg-primary/10 border border-primary/20' : 'hover:bg-muted/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        player.rank <= 3 ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'
                      }`}>
                        {player.rank}
                      </div>
                      <div>
                        <div className="font-medium text-sm">{player.name}</div>
                        <div className="text-xs text-muted-foreground">Level {player.level}</div>
                      </div>
                    </div>
                    <div className="text-sm font-medium">{player.xp} XP</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Badges Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Earned Badges */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Earned Badges ({earnedBadges.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {earnedBadges.map((badge) => (
                  <div key={badge.id} className="p-4 rounded-lg bg-success/5 border border-success/20 text-center">
                    <div className="text-3xl mb-2">{badge.icon}</div>
                    <div className="font-semibold text-sm mb-1">{badge.name}</div>
                    <div className="text-xs text-muted-foreground mb-2">{badge.description}</div>
                    <Badge variant="default" className="text-xs">+{badge.xp} XP</Badge>
                    <div className="text-xs text-muted-foreground mt-1">
                      Earned {badge.earnedDate}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Locked Badges */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Available Badges ({lockedBadges.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {lockedBadges.map((badge) => (
                  <div key={badge.id} className="p-4 rounded-lg bg-muted/20 border text-center">
                    <div className="text-3xl mb-2 grayscale opacity-50">{badge.icon}</div>
                    <div className="font-semibold text-sm mb-1 text-muted-foreground">{badge.name}</div>
                    <div className="text-xs text-muted-foreground mb-2">{badge.description}</div>
                    <Badge variant="outline" className="text-xs">+{badge.xp} XP</Badge>
                    {badge.progress && (
                      <div className="mt-2">
                        <Progress value={badge.progress} className="h-2" />
                        <div className="text-xs text-muted-foreground mt-1">
                          {badge.progress}% complete
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Gamification;