import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import { Separator } from "../components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  User,
  Lock,
  Bell,
  Clock,
  Moon,
  Sun,
  Save,
  Shield,
  Building2,
} from "lucide-react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [lateNotifications, setLateNotifications] = useState(true);
  const [absentNotifications, setAbsentNotifications] = useState(true);

  const handleDarkModeToggle = (checked: boolean) => {
    setDarkMode(checked);
    if (checked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Settings
        </h1>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-1">
          Manage your system preferences and configurations
        </p>
      </div>

      <Tabs defaultValue="account" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:w-auto lg:inline-grid">
          <TabsTrigger value="account">
            <User className="w-4 h-4 md:mr-2" />
            <span className="hidden md:inline">Account</span>
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="w-4 h-4 md:mr-2" />
            <span className="hidden md:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="system">
            <Building2 className="w-4 h-4 md:mr-2" />
            <span className="hidden md:inline">System</span>
          </TabsTrigger>
          <TabsTrigger value="security">
            <Shield className="w-4 h-4 md:mr-2" />
            <span className="hidden md:inline">Security</span>
          </TabsTrigger>
        </TabsList>

        {/* Account Settings */}
        <TabsContent value="account" className="space-y-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Admin" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="User" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="admin@company.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" defaultValue="+1 234-567-8900" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Input id="role" defaultValue="System Administrator" disabled />
              </div>

              <Separator />

              <Button className="bg-blue-600 hover:bg-blue-700">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input id="confirmPassword" type="password" />
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700">
                <Lock className="w-4 h-4 mr-2" />
                Update Password
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Email Notifications
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Receive email updates about attendance
                  </p>
                </div>
                <Switch
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Push Notifications
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Get real-time push notifications
                  </p>
                </div>
                <Switch
                  checked={pushNotifications}
                  onCheckedChange={setPushNotifications}
                />
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium text-gray-900 dark:text-white">
                  Alert Types
                </h4>

                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Late Arrival Alerts
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Notify when employees arrive late
                    </p>
                  </div>
                  <Switch
                    checked={lateNotifications}
                    onCheckedChange={setLateNotifications}
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Absence Alerts
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Notify when employees are absent
                    </p>
                  </div>
                  <Switch
                    checked={absentNotifications}
                    onCheckedChange={setAbsentNotifications}
                  />
                </div>
              </div>

              <Separator />

              <Button className="bg-blue-600 hover:bg-blue-700">
                <Save className="w-4 h-4 mr-2" />
                Save Preferences
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* System Settings */}
        <TabsContent value="system" className="space-y-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    {darkMode ? (
                      <Moon className="w-5 h-5 text-blue-600" />
                    ) : (
                      <Sun className="w-5 h-5 text-orange-500" />
                    )}
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Dark Mode
                    </h4>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Switch between light and dark theme
                  </p>
                </div>
                <Switch checked={darkMode} onCheckedChange={handleDarkModeToggle} />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Attendance Schedule Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="workStartTime">Work Start Time</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      id="workStartTime"
                      type="time"
                      defaultValue="09:00"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="workEndTime">Work End Time</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      id="workEndTime"
                      type="time"
                      defaultValue="17:00"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="lateThreshold">Late Threshold (minutes)</Label>
                <Input
                  id="lateThreshold"
                  type="number"
                  defaultValue="15"
                  min="0"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Mark employee as late after this many minutes
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="workingDays">Working Days per Week</Label>
                <Select defaultValue="5">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 Days (Mon-Fri)</SelectItem>
                    <SelectItem value="6">6 Days (Mon-Sat)</SelectItem>
                    <SelectItem value="7">7 Days (Mon-Sun)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <Button className="bg-blue-600 hover:bg-blue-700">
                <Save className="w-4 h-4 mr-2" />
                Save Configuration
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>System Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Version
                  </p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    1.0.0
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Last Updated
                  </p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    May 14, 2026
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Database
                  </p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Connected
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Status
                  </p>
                  <p className="font-medium text-green-600">Active</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Security Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Two-Factor Authentication
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Session Timeout
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Automatically log out after inactivity
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="sessionTimeout">Timeout Duration (minutes)</Label>
                <Input
                  id="sessionTimeout"
                  type="number"
                  defaultValue="30"
                  min="5"
                />
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium text-gray-900 dark:text-white">
                  Recent Login Activity
                </h4>
                <div className="space-y-3">
                  {[
                    {
                      device: "Chrome on Windows",
                      location: "New York, USA",
                      time: "2 hours ago",
                    },
                    {
                      device: "Safari on iPhone",
                      location: "New York, USA",
                      time: "1 day ago",
                    },
                    {
                      device: "Firefox on macOS",
                      location: "Boston, USA",
                      time: "3 days ago",
                    },
                  ].map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {activity.device}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {activity.location} • {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <Button className="bg-blue-600 hover:bg-blue-700">
                <Save className="w-4 h-4 mr-2" />
                Save Security Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
