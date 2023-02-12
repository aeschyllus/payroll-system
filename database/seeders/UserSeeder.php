<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'first_name' => 'Admin',
            'last_name' => '-',
            'phone_number' => '09123456789',
            'position_id' => 1,
            'email' => 'admin@mail.com',
            'password' => Hash::make('admin'),
        ]);

        DB::table('users')->insert([
            'first_name' => 'John',
            'last_name' => 'Doe',
            'phone_number' => '09123456789',
            'position_id' => 2,
            'email' => 'johndoe@mail.com',
            'password' => Hash::make('johndoe'),
        ]);

        DB::table('users')->insert([
            'first_name' => 'Enteng',
            'last_name' => 'Kabisote',
            'phone_number' => '09123456789',
            'position_id' => 4,
            'email' => 'ekabisote@mail.com',
            'password' => Hash::make('ekabisote'),
        ]);
    }
}
