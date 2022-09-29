<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
// use Log;
use Exception;
use Illuminate\Support\Facades\Log;

class EmployeesController extends Controller
{
    // Get employees list from database
    public function getEmployeeList(){
        try{
            $employees = Employee::all();
            return response()->json($employees);

        }catch(Exception $e){
            Log::error($e);
        }
    }

    // Get individual employee details
    public function getEmployeeDetails(Request $request){
        try{
            $employeeData = Employee::findOrFail($request->get('employeeId')); 
            return response()->json($employeeData);

        }catch(Exception $e){
            Log::error($e);
        }
    }
}
