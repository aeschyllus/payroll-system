<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AttendanceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('attendances')->insert([
            'user_id' => 2,
            'time_in' => new Carbon('2023-02-06 07:30:00'),
            'time_out' => new Carbon('2023-02-06 16:30:00'),
            'created_at' => new Carbon('2023-02-06 07:30:00'),
            'updated_at' => new Carbon('2023-02-06 16:30:00'),
        ]);

        DB::table('attendances')->insert([
            'user_id' => 3,
            'time_in' => new Carbon('2023-02-06 07:30:00'),
            'time_out' => new Carbon('2023-02-06 16:30:00'),
            'created_at' => new Carbon('2023-02-06 07:30:00'),
            'updated_at' => new Carbon('2023-02-06 16:30:00'),
        ]);


        DB::table('attendances')->insert([
            'user_id' => 2,
            'time_in' => new Carbon('2023-02-07 07:30:00'),
            'time_out' => new Carbon('2023-02-07 16:30:00'),
            'created_at' => new Carbon('2023-02-07 07:30:00'),
            'updated_at' => new Carbon('2023-02-07 16:30:00'),
        ]);

        DB::table('attendances')->insert([
            'user_id' => 3,
            'time_in' => new Carbon('2023-02-07 07:30:00'),
            'time_out' => new Carbon('2023-02-07 16:30:00'),
            'created_at' => new Carbon('2023-02-07 07:30:00'),
            'updated_at' => new Carbon('2023-02-07 16:30:00'),
        ]);

        DB::table('attendances')->insert([
            'user_id' => 2,
            'time_in' => new Carbon('2023-02-08 07:30:00'),
            'time_out' => new Carbon('2023-02-08 16:30:00'),
            'created_at' => new Carbon('2023-02-08 07:30:00'),
            'updated_at' => new Carbon('2023-02-08 16:30:00'),
        ]);

        DB::table('attendances')->insert([
            'user_id' => 3,
            'time_in' => new Carbon('2023-02-08 07:30:00'),
            'time_out' => new Carbon('2023-02-08 16:30:00'),
            'created_at' => new Carbon('2023-02-08 07:30:00'),
            'updated_at' => new Carbon('2023-02-08 16:30:00'),
        ]);

        DB::table('attendances')->insert([
            'user_id' => 2,
            'time_in' => new Carbon('2023-02-09 07:30:00'),
            'time_out' => new Carbon('2023-02-09 16:30:00'),
            'created_at' => new Carbon('2023-02-09 07:30:00'),
            'updated_at' => new Carbon('2023-02-09 16:30:00'),
        ]);

        DB::table('attendances')->insert([
            'user_id' => 3,
            'time_in' => new Carbon('2023-02-09 07:30:00'),
            'time_out' => new Carbon('2023-02-09 16:30:00'),
            'created_at' => new Carbon('2023-02-09 07:30:00'),
            'updated_at' => new Carbon('2023-02-09 16:30:00'),
        ]);

        DB::table('attendances')->insert([
            'user_id' => 2,
            'time_in' => new Carbon('2023-02-10 07:30:00'),
            'time_out' => new Carbon('2023-02-10 16:30:00'),
            'created_at' => new Carbon('2023-02-10 07:30:00'),
            'updated_at' => new Carbon('2023-02-10 16:30:00'),
        ]);

        DB::table('attendances')->insert([
            'user_id' => 3,
            'time_in' => new Carbon('2023-02-10 07:30:00'),
            'time_out' => new Carbon('2023-02-10 16:30:00'),
            'created_at' => new Carbon('2023-02-10 07:30:00'),
            'updated_at' => new Carbon('2023-02-10 16:30:00'),
        ]);
    }
}
