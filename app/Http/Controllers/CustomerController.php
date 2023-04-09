<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $customer = Customer::orderBy('name')->get();
        return $customer;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request;
        $id = Str::uuid();
        Customer::create([
            'id' => $id,
            'name' => $data->name,
            'address' => $data->address,
            'phone' => $data->phone,
        ]);
        $customer = Customer::orderBy('name')->get();//
        return $customer;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Customer $customer)
    {
        $customer = Customer::where('id', $customer->id)
            -> update($request->all());
        return $data = Customer::orderBy('name')->get();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Customer $customer)
    {
        $customer = Customer::where('id', $customer->id)->delete();
        return $data = Customer::orderBy('name')->get();
    }
}
