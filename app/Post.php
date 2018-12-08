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

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }

    public static function boot()
    {
        parent::boot();
        static::creating(function ($post) {
            $post->user_id = auth()->user()->id;
        });
    }
}
