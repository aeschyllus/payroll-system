<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AttendanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $attendances = Attendance::with('user')
            ->where('user_id', auth()->id())
            ->orderBy('created_at', 'desc')
            ->get();

        if (auth()->user()->position->name == 'Administrator') {
            $attendances = Attendance::with('user')
                ->orderBy('created_at', 'desc')
                ->get();
        }

        return Inertia::render('Attendance/Index', [
            'attendances' => $attendances,
            'has_timed_in' => $attendances->first()->time_out == null,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Attendance::create([
            'user_id' => $request->user_id,
            'time_in' => $request->time_in,
        ]);

        return redirect()->route('attendance');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Attendance  $attendance
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Attendance $attendance)
    {
        $attendance->update([
            'time_out' => $request->time_out
        ]);

        return redirect()->route('attendance');
    }
}
