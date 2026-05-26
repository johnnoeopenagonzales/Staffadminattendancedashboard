import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Label } from "../components/ui/label";
import {
  Search,
  Filter,
  Download,
  QrCode,
  Plus,
  Calendar,
  Edit,
  Trash2,
} from "lucide-react";

const attendanceRecords = [
  {
    id: "EMP001",
    name: "John Doe",
    department: "IT",
    date: "2026-05-14",
    timeIn: "08:45 AM",
    timeOut: "05:30 PM",
    status: "Present",
    hours: "8.75",
  },
  {
    id: "EMP002",
    name: "Jane Smith",
    department: "HR",
    date: "2026-05-14",
    timeIn: "09:15 AM",
    timeOut: "05:45 PM",
    status: "Late",
    hours: "8.50",
  },
  {
    id: "EMP003",
    name: "Mike Johnson",
    department: "Sales",
    date: "2026-05-14",
    timeIn: "08:30 AM",
    timeOut: "05:00 PM",
    status: "Present",
    hours: "8.50",
  },
  {
    id: "EMP004",
    name: "Sarah Williams",
    department: "Finance",
    date: "2026-05-14",
    timeIn: "-",
    timeOut: "-",
    status: "Absent",
    hours: "0",
  },
  {
    id: "EMP005",
    name: "David Brown",
    department: "IT",
    date: "2026-05-14",
    timeIn: "08:50 AM",
    timeOut: "05:20 PM",
    status: "Present",
    hours: "8.50",
  },
  {
    id: "EMP006",
    name: "Emily Davis",
    department: "Marketing",
    date: "2026-05-14",
    timeIn: "09:30 AM",
    timeOut: "06:00 PM",
    status: "Late",
    hours: "8.50",
  },
  {
    id: "EMP007",
    name: "Robert Wilson",
    department: "IT",
    date: "2026-05-14",
    timeIn: "08:40 AM",
    timeOut: "05:15 PM",
    status: "Present",
    hours: "8.58",
  },
  {
    id: "EMP008",
    name: "Lisa Anderson",
    department: "HR",
    date: "2026-05-14",
    timeIn: "08:35 AM",
    timeOut: "05:10 PM",
    status: "Present",
    hours: "8.58",
  },
];

export default function AttendanceManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("2026-05-14");

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

  const filteredRecords = attendanceRecords.filter((record) => {
    const matchesSearch =
      record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      departmentFilter === "all" || record.department === departmentFilter;
    const matchesStatus =
      statusFilter === "all" || record.status === statusFilter;
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Attendance Management
          </h1>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-1">
            Manage and track employee attendance records
          </p>
        </div>
        <div className="flex items-center gap-2 md:space-x-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-green-600 hover:bg-green-700 flex-1 md:flex-initial">
                <QrCode className="w-4 h-4 md:mr-2" />
                <span className="hidden md:inline">QR Scanner</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>QR Code Scanner</DialogTitle>
                <DialogDescription>
                  Scan employee QR code for attendance
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center justify-center p-8 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <div className="text-center">
                  <QrCode className="w-32 h-32 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600 dark:text-gray-400">
                    QR Scanner Interface
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700 flex-1 md:flex-initial">
                <Plus className="w-4 h-4 md:mr-2" />
                <span className="hidden md:inline">Add Manually</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Attendance Record</DialogTitle>
                <DialogDescription>
                  Manually add an attendance record
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="employee">Employee</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select employee" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="emp1">John Doe (EMP001)</SelectItem>
                      <SelectItem value="emp2">Jane Smith (EMP002)</SelectItem>
                      <SelectItem value="emp3">
                        Mike Johnson (EMP003)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeIn">Time In</Label>
                  <Input id="timeIn" type="time" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeOut">Time Out</Label>
                  <Input id="timeOut" type="time" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="present">Present</SelectItem>
                      <SelectItem value="late">Late</SelectItem>
                      <SelectItem value="absent">Absent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Add Record
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <CardTitle>Attendance Records</CardTitle>
            <div className="flex flex-wrap items-center gap-3">
              {/* Search */}
              <div className="relative flex-1 md:flex-initial md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search by name or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Date Filter */}
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10" />
                <Input
                  type="date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="pl-10 w-auto"
                />
              </div>

              {/* Department Filter */}
              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                <SelectTrigger className="w-40">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="IT">IT</SelectItem>
                  <SelectItem value="HR">HR</SelectItem>
                  <SelectItem value="Sales">Sales</SelectItem>
                  <SelectItem value="Finance">Finance</SelectItem>
                  <SelectItem value="Marketing">Marketing</SelectItem>
                </SelectContent>
              </Select>

              {/* Status Filter */}
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Present">Present</SelectItem>
                  <SelectItem value="Absent">Absent</SelectItem>
                  <SelectItem value="Late">Late</SelectItem>
                </SelectContent>
              </Select>

              {/* Export Button */}
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {filteredRecords.map((record) => (
              <div
                key={record.id}
                className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg space-y-3"
              >
                <div className="flex items-start justify-between">
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
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-500">Department</p>
                    <p className="font-medium">{record.department}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Date</p>
                    <p className="font-medium">{record.date}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Time In</p>
                    <p className="font-medium">{record.timeIn}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Time Out</p>
                    <p className="font-medium">{record.timeOut}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Hours</p>
                    <p className="font-medium">{record.hours}h</p>
                  </div>
                </div>
                <div className="flex items-center justify-end space-x-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block rounded-lg border border-gray-200 dark:border-gray-700 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50 dark:bg-gray-800">
                  <TableHead>Employee ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time In</TableHead>
                  <TableHead>Time Out</TableHead>
                  <TableHead>Hours</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRecords.map((record) => (
                  <TableRow key={record.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <TableCell className="font-medium">{record.id}</TableCell>
                    <TableCell className="font-medium">{record.name}</TableCell>
                    <TableCell>{record.department}</TableCell>
                    <TableCell>{record.date}</TableCell>
                    <TableCell>{record.timeIn}</TableCell>
                    <TableCell>{record.timeOut}</TableCell>
                    <TableCell>{record.hours}h</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(record.status)}>
                        {record.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-blue-600 hover:text-blue-700"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredRecords.length} of {attendanceRecords.length} records
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
