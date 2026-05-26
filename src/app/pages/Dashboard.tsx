import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  Users,
  UserCheck,
  UserX,
  Clock,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const weeklyData = [
  { day: "Mon", present: 85, absent: 5, late: 10 },
  { day: "Tue", present: 88, absent: 4, late: 8 },
  { day: "Wed", present: 82, absent: 8, late: 10 },
  { day: "Thu", present: 90, absent: 3, late: 7 },
  { day: "Fri", present: 86, absent: 6, late: 8 },
];

const departmentData = [
  { name: "IT", value: 92, color: "#3b82f6" },
  { name: "HR", value: 88, color: "#10b981" },
  { name: "Sales", value: 85, color: "#f59e0b" },
  { name: "Finance", value: 95, color: "#8b5cf6" },
];

const recentAttendance = [
  {
    id: "EMP001",
    name: "John Doe",
    department: "IT",
    timeIn: "08:45 AM",
    timeOut: "05:30 PM",
    status: "Present",
  },
  {
    id: "EMP002",
    name: "Jane Smith",
    department: "HR",
    timeIn: "09:15 AM",
    timeOut: "05:45 PM",
    status: "Late",
  },
  {
    id: "EMP003",
    name: "Mike Johnson",
    department: "Sales",
    timeIn: "08:30 AM",
    timeOut: "05:00 PM",
    status: "Present",
  },
  {
    id: "EMP004",
    name: "Sarah Williams",
    department: "Finance",
    timeIn: "-",
    timeOut: "-",
    status: "Absent",
  },
  {
    id: "EMP005",
    name: "David Brown",
    department: "IT",
    timeIn: "08:50 AM",
    timeOut: "05:20 PM",
    status: "Present",
  },
];

export default function Dashboard() {
  const stats = [
    {
      title: "Total Employees",
      value: "100",
      change: "+5%",
      trend: "up",
      icon: Users,
      color: "blue",
    },
    {
      title: "Present Today",
      value: "86",
      change: "+2%",
      trend: "up",
      icon: UserCheck,
      color: "green",
    },
    {
      title: "Absent Today",
      value: "6",
      change: "-1%",
      trend: "down",
      icon: UserX,
      color: "red",
    },
    {
      title: "Late Employees",
      value: "8",
      change: "-3%",
      trend: "down",
      icon: Clock,
      color: "orange",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Present":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "Absent":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      case "Late":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400";
    }
  };

  const getCardColor = (color: string) => {
    switch (color) {
      case "blue":
        return "border-blue-200 dark:border-blue-800";
      case "green":
        return "border-green-200 dark:border-green-800";
      case "red":
        return "border-red-200 dark:border-red-800";
      case "orange":
        return "border-orange-200 dark:border-orange-800";
      default:
        return "";
    }
  };

  const getIconBg = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400";
      case "green":
        return "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400";
      case "red":
        return "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400";
      case "orange":
        return "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400";
      default:
        return "";
    }
  };

  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-1">
          Welcome back! Here's your attendance overview.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown;
          return (
            <Card
              key={stat.title}
              className={`border-l-4 ${getCardColor(stat.color)} shadow-lg hover:shadow-xl transition-shadow`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.title}
                    </p>
                    <h3 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
                      {stat.value}
                    </h3>
                    <div className="flex items-center mt-2 text-sm">
                      <TrendIcon
                        className={`w-4 h-4 mr-1 ${
                          stat.trend === "up"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      />
                      <span
                        className={
                          stat.trend === "up"
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        {stat.change}
                      </span>
                      <span className="text-gray-500 ml-1">from last week</span>
                    </div>
                  </div>
                  <div className={`p-4 rounded-xl ${getIconBg(stat.color)}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Attendance */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Weekly Attendance Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="present"
                  stroke="#10b981"
                  strokeWidth={3}
                  name="Present"
                />
                <Line
                  type="monotone"
                  dataKey="absent"
                  stroke="#ef4444"
                  strokeWidth={3}
                  name="Absent"
                />
                <Line
                  type="monotone"
                  dataKey="late"
                  stroke="#f59e0b"
                  strokeWidth={3}
                  name="Late"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Department Attendance */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Department Attendance Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="50%" height={300}>
                <PieChart>
                  <Pie
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {departmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Attendance Rate */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Overall Attendance Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
                86%
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Current attendance rate
              </p>
            </div>
            <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-lg px-4 py-2">
              Excellent
            </Badge>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
            <div
              className="bg-gradient-to-r from-green-500 to-blue-600 h-4 rounded-full transition-all duration-500"
              style={{ width: "86%" }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Recent Attendance Logs */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Recent Attendance Logs</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {recentAttendance.map((record) => (
              <div
                key={record.id}
                className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {record.name}
                    </p>
                    <p className="text-sm text-gray-500">{record.id}</p>
                  </div>
                  <Badge className={getStatusColor(record.status)}>
                    {record.status}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-gray-500">Department</p>
                    <p className="font-medium">{record.department}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Time In</p>
                    <p className="font-medium">{record.timeIn}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-500">Time Out</p>
                    <p className="font-medium">{record.timeOut}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Time In</TableHead>
                  <TableHead>Time Out</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentAttendance.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell className="font-medium">{record.id}</TableCell>
                    <TableCell>{record.name}</TableCell>
                    <TableCell>{record.department}</TableCell>
                    <TableCell>{record.timeIn}</TableCell>
                    <TableCell>{record.timeOut}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(record.status)}>
                        {record.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
