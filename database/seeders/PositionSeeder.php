<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PositionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('positions')->insert([
            'name' => 'Administrator',
            'salary' => 0
        ]);

        DB::table('positions')->insert([
            'name' => 'Brgy. Captain',
            'salary' => 25000
        ]);

        DB::table('positions')->insert([
            'name' => 'Brgy. Treasurer',
            'salary' => 20000
        ]);

        DB::table('positions')->insert([
            'name' => 'Brgy. Secretary',
            'salary' => 15000
        ]);

        DB::table('positions')->insert([
            'name' => 'Sangguniang Brgy. Members',
            'salary' => 10000
        ]);

        DB::table('positions')->insert([
            'name' => 'Sangguniang Kabataan Chairmen',
            'salary' => 10000
        ]);
    }
}
