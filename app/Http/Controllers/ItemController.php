<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Item::orderBy('name')->get();
        return $data;
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request;
        $id = Str::uuid();
        Item::create([
            'id' => $id,
            'name' => $data->name,
            'price' => $data->price,
            'description' => $data->description,
            'image_link' => $data->image_link
        ]);
        $products = Item::orderBy('name')->get();
        return $data = Item::orderBy('name')->get();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Item $item)
    {
        $item = Item::where('id', $item->id)
            -> update($request->all());
        return $data = Item::orderBy('name')->get();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Item $item)
    {
        $data = Item::where('id', $item->id)->delete();
        return $data = Item::orderBy('name')->get();
    }
}
