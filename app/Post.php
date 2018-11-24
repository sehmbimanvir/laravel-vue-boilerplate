<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = ['title', 'description'];

    public $appends = ['created_on'];

    public function getCreatedOnAttribute()
    {
        return $this->created_at->diffForHumans();
    }
}
