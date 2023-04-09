<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class BagController extends Controller
{
    public function createOrUpdateBag(Request $request) {
        $order = DB::table('orders');
        $bag = DB::table('order_items');
        $item = DB::table('items')->where('id', $request->product['id'])->first();
        $customer = DB::table('customers')->where('id', $request->customer_id)->first();

        if (empty($request->id)) {
            $id = Str::uuid();
            $subtotal = $item->price * $request->product['qty'];
            $order->insert([
                'id' => $id,
                'customer_id' => $request->customer_id,
                'code' => substr(str_shuffle($id), 0, 10),
                'date' => date('Y-m-d'),
                'address' => $customer->address,
                'subtotal' => $subtotal,
                'discount' => 0,
                'total' => $subtotal,
            ]);

            $bag->insert([
                'id' => Str::uuid(),
                'order_id' => $id,
                'item_id' => $request->product['id'],
                'qty' => $request->product['qty'],
                'price' => $item->price,
                'discount' => 0,
                'total' => $item->price * $request->product['qty'],
                'note' => ''
            ]);

            $order = DB::table('orders')
                ->where('id', $id)->first();

            $bag = DB::table('order_items')
                ->where('order_id', $order->id)
                ->join('items', 'items.id', 'order_items.item_id')
                ->get();

            $data = [
                'id' => $order->id,
                'customer_id' => $order->customer_id,
                'products' => $bag
            ];

            return $data;
        } else {
            $bag->where('order_id', $request->id)->where('item_id', $request->product['id'])->first();
            $total = 0;
            $qty = 0;

            return($bag);

            if (empty($bag)) {
                DB::table('order_items')
                    ->where('order_id', $request->id)
                    ->where('order_id', $request->product['id'])
                    ->update([
                        'qty' => $request->product['qty'],
                        'total' => $request->product['qty'] * $item->price
                    ]);                
            } else {
                DB::table('order_items')->insert([
                    'id' => Str::uuid(),
                    'order_id' => $request->$id,
                    'item_id' => $request->product['id'],
                    'qty' => $request->product['qty'],
                    'price' => $item->price,
                    'discount' => 0,
                    'total' => $item->price * $request->product['qty'],
                    'note' => ''
                ]);
            }

            $bag = DB::table('order_items')
                ->where('order_id', $request->id)
                ->join('items', 'items.id', 'order_items.item_id')
                ->get();

            $order = DB::table('orders')
                ->where('id', $request->id)
                ->update([
                    'subtotal' => $total,
                    'total' => $total,
                    'qty' => $qty
                ])->first();

            for ($i=0; $i < count($bag); $i++) { 
                $total = $total + $bag[$i]->total;
                $qty = $qty + $bag[$i]->qty;
            }

            $data = [
                'id' => $order->id,
                'customer_id' => $order->customer_id,
                'products' => $bag
            ];

            return $data;
        }

        return;
    }
}
