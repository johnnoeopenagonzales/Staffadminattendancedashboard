import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
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
import { Switch } from "../components/ui/switch";
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Mail,
  Phone,
  MapPin,
  Upload,
} from "lucide-react";

const employees = [
  {
    id: "EMP001",
    name: "John Doe",
    email: "john.doe@company.com",
    phone: "+1 234-567-8900",
    department: "IT",
    position: "Software Developer",
    status: "Active",
    joinDate: "2023-01-15",
  },
  {
    id: "EMP002",
    name: "Jane Smith",
    email: "jane.smith@company.com",
    phone: "+1 234-567-8901",
    department: "HR",
    position: "HR Manager",
    status: "Active",
    joinDate: "2022-06-20",
  },
  {
    id: "EMP003",
    name: "Mike Johnson",
    email: "mike.johnson@company.com",
    phone: "+1 234-567-8902",
    department: "Sales",
    position: "Sales Executive",
    status: "Active",
    joinDate: "2023-03-10",
  },
  {
    id: "EMP004",
    name: "Sarah Williams",
    email: "sarah.williams@company.com",
    phone: "+1 234-567-8903",
    department: "Finance",
    position: "Accountant",
    status: "Inactive",
    joinDate: "2021-11-05",
  },
  {
    id: "EMP005",
    name: "David Brown",
    email: "david.brown@company.com",
    phone: "+1 234-567-8904",
    department: "IT",
    position: "DevOps Engineer",
    status: "Active",
    joinDate: "2023-07-12",
  },
  {
    id: "EMP006",
    name: "Emily Davis",
    email: "emily.davis@company.com",
    phone: "+1 234-567-8905",
    department: "Marketing",
    position: "Marketing Specialist",
    status: "Active",
    joinDate: "2022-09-18",
  },
];

export default function EmployeeManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getStatusColor = (status: string) => {
    return status === "Active"
      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
      : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400";
  };

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      departmentFilter === "all" || employee.department === departmentFilter;
    const matchesStatus =
      statusFilter === "all" || employee.status === statusFilter;
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Employee Management
          </h1>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-1">
            Manage employee profiles and information
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700 w-full md:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              Add Employee
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add New Employee</DialogTitle>
              <DialogDescription>
                Fill in the employee details below
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
              {/* Photo Upload */}
              <div className="flex items-center space-x-4">
                <Avatar className="w-20 h-20">
                  <AvatarFallback className="bg-blue-600 text-white text-2xl">
                    +
                  </AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline" size="sm">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Photo
                  </Button>
                  <p className="text-xs text-gray-500 mt-1">
                    JPG, PNG or GIF (max. 2MB)
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john.doe@company.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 234-567-8900" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="it">IT</SelectItem>
                      <SelectItem value="hr">HR</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position</Label>
                  <Input id="position" placeholder="Software Developer" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="joinDate">Join Date</Label>
                <Input id="joinDate" type="date" />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <Label htmlFor="active">Active Status</Label>
                  <p className="text-sm text-gray-500">
                    Set employee as active or inactive
                  </p>
                </div>
                <Switch id="active" defaultChecked />
              </div>

              <div className="flex space-x-3">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                  Add Employee
                </Button>
                <Button variant="outline" className="flex-1">
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-l-4 border-blue-500 shadow-lg">
          <CardContent className="p-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Total Employees
            </p>
            <h3 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
              {employees.length}
            </h3>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-green-500 shadow-lg">
          <CardContent className="p-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Active Employees
            </p>
            <h3 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
              {employees.filter((e) => e.status === "Active").length}
            </h3>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-orange-500 shadow-lg">
          <CardContent className="p-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Departments
            </p>
            <h3 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
              5
            </h3>
          </CardContent>
        </Card>
      </div>

      {/* Employee Table */}
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <CardTitle>Employee List</CardTitle>
            <div className="flex flex-wrap items-center gap-3">
              {/* Search */}
              <div className="relative flex-1 md:flex-initial md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search employees..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Department Filter */}
              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                <SelectTrigger className="w-40">
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
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {filteredEmployees.map((employee) => (
              <div
                key={employee.id}
                className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-blue-600 text-white">
                        {getInitials(employee.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {employee.name}
                      </p>
                      <p className="text-sm text-gray-500">{employee.id}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(employee.status)}>
                    {employee.status}
                  </Badge>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Mail className="w-4 h-4 mr-2" />
                    {employee.email}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Phone className="w-4 h-4 mr-2" />
                    {employee.phone}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm pt-2 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <p className="text-gray-500">Department</p>
                    <p className="font-medium">{employee.department}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Position</p>
                    <p className="font-medium">{employee.position}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-500">Join Date</p>
                    <p className="font-medium">{employee.joinDate}</p>
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
                  <TableHead>Employee</TableHead>
                  <TableHead>ID</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEmployees.map((employee) => (
                  <TableRow key={employee.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback className="bg-blue-600 text-white">
                            {getInitials(employee.name)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{employee.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{employee.id}</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <Mail className="w-3 h-3 mr-1" />
                          {employee.email}
                        </div>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <Phone className="w-3 h-3 mr-1" />
                          {employee.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell>{employee.position}</TableCell>
                    <TableCell>{employee.joinDate}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(employee.status)}>
                        {employee.status}
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
            Showing {filteredEmployees.length} of {employees.length} employees
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
