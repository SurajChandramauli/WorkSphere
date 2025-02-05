package com.hu22.producttrack.deloittenetworkingapp.utils;
import lombok.Data;

public @Data class ResponseWrapper<T> {
    private String message;
    private T data;

    public ResponseWrapper(String message, T data) {
        this.message = message;
        this.data = data;
    }
}
