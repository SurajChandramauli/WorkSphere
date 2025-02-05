package com.hu22.producttrack.deloittenetworkingapp.beans;

import lombok.Data;

@Data
public class Statistic {
    private String primary_skill;
    private long cnt;

    public Statistic(String primary_skill, Long cnt){
        this.primary_skill=primary_skill;
        this.cnt=cnt;
    }

    public Statistic(){

    }
}
