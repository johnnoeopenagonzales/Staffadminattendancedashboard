import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Download,
  FileText,
  TrendingUp,
  Users,
  Calendar,
  Clock,
} from "lucide-react";

const monthlyData = [
  { month: "Jan", present: 92, absent: 4, late: 4 },
  { month: "Feb", present: 88, absent: 6, late: 6 },
  { month: "Mar", present: 90, absent: 5, late: 5 },
  { month: "Apr", present: 94, absent: 3, late: 3 },
  { month: "May", present: 86, absent: 6, late: 8 },
];

const departmentComparison = [
  { department: "IT", attendance: 92, employees: 25 },
  { department: "HR", attendance: 88, employees: 10 },
  { department: "Sales", attendance: 85, employees: 20 },
  { department: "Finance", attendance: 95, employees: 12 },
  { department: "Marketing", attendance: 89, employees: 15 },
];

const attendanceDistribution = [
  { name: "Present", value: 86, color: "#10b981" },
  { name: "Absent", value: 6, color: "#ef4444" },
  { name: "Late", value: 8, color: "#f59e0b" },
];

const employeeSummary = [
  {
    name: "John Doe",
    id: "EMP001",
    totalDays: 22,
    present: 20,
    absent: 1,
    late: 1,
    rate: 91,
  },
  {
    name: "Jane Smith",
    id: "EMP002",
    totalDays: 22,
    present: 19,
    absent: 2,
    late: 1,
    rate: 86,
  },
  {
    name: "Mike Johnson",
    id: "EMP003",
    totalDays: 22,
    present: 21,
    absent: 0,
    late: 1,
    rate: 95,
  },
  {
    name: "Sarah Williams",
    id: "EMP004",
    totalDays: 22,
    present: 18,
    absent: 3,
    late: 1,
    rate: 82,
  },
  {
    name: "David Brown",
    id: "EMP005",
    totalDays: 22,
    present: 20,
    absent: 1,
    late: 1,
    rate: 91,
  },
];

export default function Reports() {
  const getRateColor = (rate: number) => {
    if (rate >= 90)
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    if (rate >= 80)
      return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";
    return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Reports & Analytics
          </h1>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-1">
            Comprehensive attendance reports and insights
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 md:space-x-3">
          <Select defaultValue="month">
            <SelectTrigger className="w-full md:w-40">
              <Calendar className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-red-600 hover:bg-red-700 flex-1 md:flex-initial">
            <FileText className="w-4 h-4 md:mr-2" />
            <span className="hidden md:inline">Export PDF</span>
            <span className="md:hidden">PDF</span>
          </Button>
          <Button className="bg-green-600 hover:bg-green-700 flex-1 md:flex-initial">
            <Download className="w-4 h-4 md:mr-2" />
            <span className="hidden md:inline">Export Excel</span>
            <span className="md:hidden">Excel</span>
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-l-4 border-blue-500 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Avg Attendance Rate
                </p>
                <h3 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
                  90%
                </h3>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-green-500 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Total Working Days
                </p>
                <h3 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
                  22
                </h3>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <Calendar className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-orange-500 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Avg Late Arrivals
                </p>
                <h3 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
                  5%
                </h3>
              </div>
              <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                <Clock className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-purple-500 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Active Employees
                </p>
                <h3 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
                  100
                </h3>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Attendance Trend */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Monthly Attendance Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
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

        {/* Attendance Distribution */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Current Attendance Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <ResponsiveContainer width="100%" height={300} className="md:w-1/2">
                <PieChart>
                  <Pie
                    data={attendanceDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {attendanceDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-4 w-full md:w-auto">
                {attendanceDistribution.map((item) => (
                  <div key={item.name} className="flex items-center space-x-3">
                    <div
                      className="w-4 h-4 rounded-full flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500">{item.value}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Department Comparison */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Department Attendance Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={departmentComparison}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis dataKey="department" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="attendance" fill="#3b82f6" name="Attendance %" />
              <Bar dataKey="employees" fill="#10b981" name="Total Employees" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Employee Attendance Summary */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Employee Attendance Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {employeeSummary.map((employee) => (
              <div
                key={employee.id}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {employee.name}
                      </h4>
                      <p className="text-sm text-gray-500">{employee.id}</p>
                    </div>
                    <Badge className={getRateColor(employee.rate)}>
                      {employee.rate}%
                    </Badge>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Total Days</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {employee.totalDays}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Present</p>
                      <p className="font-medium text-green-600">
                        {employee.present}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Absent</p>
                      <p className="font-medium text-red-600">
                        {employee.absent}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Late</p>
                      <p className="font-medium text-orange-600">
                        {employee.late}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-green-600 h-2 rounded-full transition-all"
                        style={{ width: `${employee.rate}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
