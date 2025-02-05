package com.hu22.producttrack.deloittenetworkingapp.beans;

import lombok.Data;

@Data
public class Project {
    private boolean on_project;
    private long cnt;

    public Project(boolean on_project, long cnt){
        this.on_project=on_project;
        this.cnt=cnt;
    }

    public Project(){

    }
}
